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
		"@storybook/addon-viewport",
		"@storybook/addon-docs",
		"@storybook/addon-toolbars",
		"@storybook/addon-a11y",
		"storybook-dark-mode",
		"@ergosign/storybook-addon-pseudo-states-react/register",
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
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
								"babel-plugin-storybook-addon-pseudo-states-emotion",
								{ prefix: "pseudoclass--" },
							],
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
