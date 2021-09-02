import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@storybook/theming";
import React, { FC } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { dark, light } from "../../atomic-design/ions/theme/src";

const StyledWrapper = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	${({ theme }) => css`
		background: ${theme.ui.background["1"]};
		color: ${theme.ui.text["1"]};
	`};

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;
export const ThemeWrapper: FC = props => {
	const isDark = useDarkMode();
	return (
		<ThemeProvider theme={isDark ? dark : light}>
			<StyledWrapper>{props.children}</StyledWrapper>
		</ThemeProvider>
	);
};
