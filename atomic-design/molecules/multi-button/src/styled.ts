import { StyledToggleButton } from "@dekk-ui/toggle-button";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MultiButtonProps } from "./types";

export const StyledMultiButton = styled.div<MultiButtonProps>`
	display: inline-grid;
	grid-auto-columns: auto;
	grid-auto-flow: column;

	${StyledToggleButton} {
		border-radius: 0;
	}

	${({ theme, fullWidth, width }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
		line-height: ${pxToRem(theme.space.s)};
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${theme.ui.fill["2"]};
		color: ${theme.ui.text["1"]};
		box-shadow: 0 0 0 1px ${theme.ui.outline["1"]};

		${StyledToggleButton} {
			border-radius: 0;

			&:first-of-type {
				border-radius: ${pxToRem(theme.radius.s)} 0 0 ${pxToRem(theme.radius.s)};
			}

			&:last-of-type {
				border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;
			}

			&:focus-visible {
				border-radius: ${pxToRem(theme.radius.s)};
			}
		}
	`};
`;
