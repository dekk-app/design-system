const path = require("path");
const packages = require("../package-names.json");

const toPath = path_ => path.join(process.cwd(), path_);

function makeAlias(dir, names) {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`@dekk-ui/${name}`]: path.resolve(__dirname, "../atomic-design", dir, name, "src"),
		}),
		{}
	);
}

module.exports = {
	reactOptions: {
		fastRefresh: true,
		strictMode: true,
	},
	stories: ["../atomic-design/**/*.stories.@(ts|tsx|mdx)"],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-links",
		"@storybook/addon-a11y",
		"storybook-dark-mode",
	],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("babel-loader"),
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-typescript",
							"@babel/preset-react",
						],
						plugins: [
							"@babel/plugin-transform-runtime",
							[
								"@emotion/babel-plugin",
								{
									sourceMap: true,
									autoLabel: "dev-only",
									labelFormat: "[local]",
									cssPropOptimization: true,
								},
							],
						],
					},
				},
				{
					loader: require.resolve("react-docgen-typescript-loader"),
					options: {
						// Provide the path to your tsconfig.json so that your stories can
						// display types from outside each individual story.
						tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
					},
				},
			],
		});
		config.resolve.alias = {
			...config.resolve.alias,
			"@emotion/core": toPath("node_modules/@emotion/react"),
			"@emotion/styled": toPath("node_modules/@emotion/styled"),
			"emotion-theming": toPath("node_modules/@emotion/react"),
			...makeAlias("ions", packages.ions),
			...makeAlias("atoms", packages.atoms),
			...makeAlias("molecules", packages.molecules),
			...makeAlias("organisms", packages.organisms),
		};
		return config;
	},
};
