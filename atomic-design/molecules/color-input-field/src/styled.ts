import { StyledInput } from "@dekk-ui/input-field";
import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledColorInput = styled(StyledInput)`
	&[type="color"] {
		padding: 0;
		&::-webkit-color-swatch {
			overflow: hidden;
			border: 0;
		}

		&::-webkit-color-swatch-wrapper {
			padding: 0;
		}

		${({ theme }) => css`
			width: ${pxToRem(theme.space.l.value)};
			border-radius: 0 ${pxToRem(theme.radius.s.value)} ${pxToRem(theme.radius.s.value)} 0;

			&::-webkit-color-swatch {
				border-radius: 0 ${pxToRem(theme.radius.s.value)} ${pxToRem(theme.radius.s.value)} 0;
				box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"].value};
			}

			&:focus-visible {
				&::-webkit-color-swatch {
					box-shadow: inset 1px 0 0 0 ${theme.ui.colors.primary.value};
				}
			}
		`};
	}
`;
