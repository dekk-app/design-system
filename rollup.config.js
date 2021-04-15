const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const json = require("@rollup/plugin-json");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");

const createBanner = ({ name, version, author, repository, license }) => `/*!
 * Copyright (c) Dekk
 * @author ${typeof author === "object" ? author.name : author}
 * @license ${license}
 * @name ${name}
 * @version ${version}
 *${
		repository
			? ` @see ${typeof repository === "object" ? repository.url : repository}\n */`
			: "/"
 }`;

const tsconfigOverride = { compilerOptions: { declaration: false } };

module.exports = () => {
	const cwd = process.cwd();
	const pkg = require(path.resolve(cwd, "package.json"));
	const inputs = pkg.files.filter(name => name.endsWith(".js"));
	const bins = pkg.bin ? Object.values(pkg.bin).map(bin => bin.replace(/^\.\/dist\//, "")) : [];
	const tsconfig = path.resolve(cwd, "tsconfig.json");
	return [
		...inputs.map(input => ({
			input: `src/${input}`.replace(".js", ".ts"),
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
				"path",
				"fs",
			],
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/${input}`,
					format: "cjs",
				},
			],
			plugins: [
				commonjs(),
				json(),
				babel({ babelHelpers: "bundled" }),
				typescript({ tsconfig }),
			],
		})),
		...inputs.map(input => ({
			input: `src/${input}`.replace(".js", ".ts"),
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
				"path",
				"fs",
			],
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/esm/${input}`,
					format: "esm",
				},
			],
			plugins: [
				commonjs(),
				json(),
				babel({ babelHelpers: "bundled" }),
				typescript({ tsconfig, tsconfigOverride }),
			],
		})),
		...bins.map(bin => {
			return {
				input: `src/${bin}`.replace(".js", ".ts"),
				external: [
					...Object.keys(pkg.dependencies || {}),
					...Object.keys(pkg.peerDependencies || {}),
					"path",
					"fs",
				],
				output: [
					{
						banner: `#!/usr/bin/env node\n${createBanner(pkg)}`,
						file: `dist/${bin}`,
						format: "cjs",
					},
				],
				plugins: [
					commonjs(),
					babel({ babelHelpers: "bundled" }),
					typescript({
						tsconfig,
						tsconfigOverride,
					}),
				],
			};
		}),
	];
};
