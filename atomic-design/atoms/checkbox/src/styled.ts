import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledCheckboxWrapper = styled.div`
	display: inline-block;
	position: relative;
	${({ theme }) => css`
		min-width: ${pxToRem(theme.space.s)};
		min-height: ${pxToRem(theme.space.s)};
		border-radius: ${pxToRem(theme.radius.s)};
	`}
`;

export const StyledSvg = styled.svg<{ hasBackground?: boolean }>`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	${({ theme, hasBackground }) => css`
		--background-color: ${theme.ui.text["1"]};

		border-radius: ${pxToRem(theme.radius.s)};
		background: ${(hasBackground && "var(--background-color)") || "none"};
		color: ${theme.ui.text["2"]};
	`}
`;

export const StyledCheckbox = styled.input`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	appearance: none;
	width: 100%; /* chromium */
	height: 100%; /* chromium */
	margin: 0;

	&:focus {
		outline: 0;
	}

	${({ theme }) => css`
		box-shadow: inset 0 0 0 1px ${theme.ui.text["1"]};
		border-radius: ${pxToRem(theme.radius.s)};

		&:focus-visible {
			box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary};

			+ ${StyledSvg} {
				--background-color: ${theme.ui.colors.primary};
			}
		}
	`};
`;

export const StyledPath = styled.path`
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke: currentColor;
	fill: none;
`;
