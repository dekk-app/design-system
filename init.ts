import fs from "fs";
import globby from "globby";
import meow from "meow";
import path from "path";
import pify from "pify";

const { flags } = meow();
const writeFile = pify(fs.writeFile);

function sort(array: string[]): string[] {
	array.sort((a, b) => {
		if (a > b) {
			return 1;
		}

		if (b > a) {
			return -1;
		}

		return 0;
	});
	return array;
}

function makeAlias(dir: string, names: string[], atomic?: boolean): Record<string, string> {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`@dekk-ui/${name}`]: [`./${atomic ? "atomic-design/" : ""}${dir}/${name}/src`],
		}),
		{}
	);
}

function getLast<T = unknown>(array: T[]): T {
	return array.reverse()[0];
}

function getLastDir(pathName: string): string {
	return getLast<string>(path.parse(pathName).dir.split("/"));
}

async function getNames() {
	const atoms = sort(await globby("./atomic-design/atoms/*/package.json")).map(item =>
		getLastDir(item)
	);
	const ions = sort(await globby("./atomic-design/ions/*/package.json")).map(item =>
		getLastDir(item)
	);
	const molecules = sort(await globby("./atomic-design/molecules/*/package.json")).map(item =>
		getLastDir(item)
	);
	const organisms = sort(await globby("./atomic-design/organisms/*/package.json")).map(item =>
		getLastDir(item)
	);

	return { atoms, ions, molecules, organisms };
}

(async () => {
	const names = await getNames();
	await writeFile(path.resolve(__dirname, "package-names.json"), JSON.stringify(names, null, 4));
	console.log("Generated package names as JSON");
	const { default: tsconfig } = await import("./tsconfig.tpl.json");
	if (flags.build) {
		await writeFile(
			path.resolve(__dirname, "tsconfig.json"),
			JSON.stringify(tsconfig, null, 4)
		);
	} else {
		const paths = {
			...makeAlias("ions", names.ions, true),
			...makeAlias("atoms", names.atoms, true),
			...makeAlias("molecules", names.molecules, true),
			...makeAlias("organisms", names.organisms, true),
		};
		await writeFile(
			path.resolve(__dirname, "tsconfig.json"),
			JSON.stringify(
				{
					...tsconfig,
					compilerOptions: {
						...tsconfig.compilerOptions,
						baseUrl: "./",
						paths,
					},
				},
				null,
				4
			)
		);
	}

	console.log("Added package aliases to tsconfig");
})();
