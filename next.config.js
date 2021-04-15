const path = require("path");
const packages = require("./package-names.json");

function makeAlias(dir, names, atomic) {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`@dekk-ui/${name}`]: path.resolve(
				__dirname,
				atomic ? "./atomic-design" : "..",
				dir,
				name,
				"src"
			),
		}),
		{}
	);
}

module.exports = {
	future: {
		webpack5: true,
	},
	async redirects() {
		return [];
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
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
						plugins: ["@babel/plugin-transform-runtime", "@emotion/babel-plugin"],
					},
				},
			],
		});
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			...makeAlias("ions", packages.ions, true),
			...makeAlias("atoms", packages.atoms, true),
			...makeAlias("molecules", packages.molecules, true),
			...makeAlias("organisms", packages.organisms, true),
		};
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};
