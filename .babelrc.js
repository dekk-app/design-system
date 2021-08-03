module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
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
	exclude: "node_modules/**",
};
