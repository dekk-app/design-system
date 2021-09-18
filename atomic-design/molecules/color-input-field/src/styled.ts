import { focus } from "@dekk-ui/focus-ring";
import { StyledInput } from "@dekk-ui/input-field";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledColorInput = styled(StyledInput)`
	&[type="color"] {
		padding: 0;

		&::-webkit-color-swatch {
			overflow: hidden;
		}

		&::-moz-color-swatch {
			overflow: hidden;
		}

		&::-webkit-color-swatch-wrapper {
			padding: 0;
		}

		&:focus {
			outline: 0;
		}

		${({ theme }) => css`
			width: ${pxToRem(theme.space.l)};
			border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;

			&::-webkit-color-swatch {
				border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;
				border: 1px solid ${theme.ui.outline["1"]};
			}

			&::-moz-color-swatch {
				border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;
				border: 1px solid ${theme.ui.outline["1"]};
			}

			&:focus-visible {
				&::-webkit-color-swatch {
					${focus};
				}

				&::-moz-color-swatch {
					${focus};
				}
			}
		`};
	}
`;
