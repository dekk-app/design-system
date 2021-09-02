/**
 * {@see https://eslint.org/docs/user-guide/configuring/rules}
 */
module.exports = {
	extends: ["xo-react", "plugin:prettier/recommended"],
	ignores: [
		"lib",
		"cypress",
		"public",
		"migrations",
		"*.config.js",
		"node_modules",
		"mockServiceWorker.js",
		"**/*.d.ts",
		"**/types.ts",
		"**/enums.ts",
		"pages",
		"docs",
		"atomic-design/ions/icons",
		"stories",
		"__pages",
	],
	plugins: ["prettier"],
	env: ["browser", "node"],
	overrides: [
		{
			files: "**/__tests__/*.{ts,tsx}",
			globals: ["test", "expect"],
			rules: {
				"import/no-extraneous-dependencies": 0,
				"unicorn/no-fn-reference-in-iterator": 0,
			},
		},
		{
			files: "**/*.stories.{ts,tsx}",
			rules: {
				"import/no-extraneous-dependencies": 0,
			},
		},
		{
			files: "**/*.{ts,tsx}",
			rules: {
				"@typescript-eslint/consistent-type-assertions": [
					1,
					{
						assertionStyle: "as",
						objectLiteralTypeAssertions: "allow-as-parameter",
					},
				],
				"react/prop-types": 0,
				"react/display-name": 0,
				"arrow-body-style": 0,
				"import/extensions": [
					1,
					{
						js: "never",
						jsx: "never",
						ts: "never",
						tsx: "never",
						css: "always",
						json: "always",
					},
				],
			},
		},
	],
	prettier: true,
	rules: {
		"unicorn/prefer-node-protocol": 0,
		"import/order": 0,
	},
};
