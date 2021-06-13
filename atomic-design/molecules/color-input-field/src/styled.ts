import { StyledInput } from "@dekk-ui/input-field";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledColorInput = styled(StyledInput)`
	&[type="color"] {
		padding: 0;

		&::-webkit-color-swatch {
			overflow: hidden;
			border: 0;
		}

		&::-moz-color-swatch {
			overflow: hidden;
			border: 0;
		}

		&::-webkit-color-swatch-wrapper {
			padding: 0;
		}

		${({ theme }) => css`
			width: ${pxToRem(theme.space.l)};
			border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;

			&::-webkit-color-swatch {
				border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;
				box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"]};
			}

			&::-moz-color-swatch {
				border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;
				box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"]};
			}

			&:focus-visible {
				&::-webkit-color-swatch {
					box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary},
						inset 0 0 0 2px ${theme.ui.fill["1"]};
				}

				&::-moz-color-swatch {
					box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary},
						inset 0 0 0 2px ${theme.ui.fill["1"]};
				}
			}
		`};
	}
`;
