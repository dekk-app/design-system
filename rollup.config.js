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
	const packageExports = ["index", ...(pkg.exports ? Object.keys(pkg.exports) : [])];
	const tsconfig = path.resolve(cwd, "tsconfig.json");
	return [
		...packageExports.map(packageExport => ({
			input: `src/${packageExport}.ts`,
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
				"path",
				"fs",
			],
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/${packageExport}.js`,
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
		...packageExports.map(packageExport => ({
			input: `src/${packageExport}.ts`,
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
				"path",
				"fs",
			],
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/esm/${packageExport}.js`,
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
	];
};
