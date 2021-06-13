import { css, Global } from "@emotion/react";
import React from "react";
import { ThemeProvider, themes } from "@storybook/theming";
import { dark, light } from "../atomic-design/ions/theme/src/";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: {
		// Override the default dark theme
		dark: themes.dark,
		// Override the default light theme
		light: themes.light,
	},
	backgrounds: {
		default: "light",
		values: [
			{
				name: "light",
				value: "#ffffff",
			},
			{
				name: "dark",
				value: "#232324",
			},
		],
	},
};

import { useDarkMode } from "storybook-dark-mode";
import { addDecorator } from "@storybook/react";

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
	const isDark = useDarkMode();
	return (
		<>
			<Global
				styles={css`
					*,
					*::before,
					*::after {
						box-sizing: border-box;
					}
					body {
						min-height: 100vh;
						margin: 0;
						padding: 0 !important;
					}
					#root {
						min-height: 100vh;
						padding: 2rem;
						background: ${isDark ? "#232324" : "#ffffff"};
						color: ${isDark ? "#ffffff" : "#000000"};
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
							Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
					}
				`}
			/>
			<ThemeProvider theme={isDark ? dark : light}>{props.children}</ThemeProvider>
		</>
	);
}

export const decorators = [renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
