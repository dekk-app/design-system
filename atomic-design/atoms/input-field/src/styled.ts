import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CombinedInputProps, InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
	overflow: hidden;
	border: 0;
	appearance: none;
	font-size: 12px;

	&:focus {
		outline: 0;
	}

	&[type="number"]::-webkit-inner-spin-button,
	&[type="number"]::-webkit-outer-spin-button {
		margin: 0;
		appearance: none;
	}

	${({ theme, fullWidth, width }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l.value)};
		height: ${pxToRem(theme.space.l.value)};
		padding: ${pxToRem(theme.space.xs.value)};
		line-height: ${pxToRem(theme.space.s.value)};
		border-radius: ${pxToRem(theme.radius.s.value)};
		background: ${theme.ui.fill["2"].value};
		color: ${theme.ui.text["1"].value};
		box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"].value};
		caret-color: ${theme.ui.colors.primary.value};

		&:hover {
			background: ${theme.ui.fill["1"].value};
		}

		&:focus {
			background: ${theme.ui.fill["1"].value};
			box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary.value};
		}

		&:invalid {
			box-shadow: inset 0 0 0 1px red; // @todo add brand color
		}
	`};
`;

export const StyledNumberInput = styled(StyledInput)`
	&[type="number"] {
		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			margin: 0;
			appearance: none;
		}
	}
`;

export const StyledCombinedInput = styled.span<CombinedInputProps>`
	display: inline-flex;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		pointer-events: none;
	}

	${StyledInput}:first-of-type {
		box-shadow: none;
	}

	${({ theme, invalid, fullWidth, width }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l.value)};
		height: ${pxToRem(theme.space.l.value)};
		border-radius: ${pxToRem(theme.radius.s.value)};
		&::before {
			box-shadow: inset 0 0 0 1px ${invalid ? "red" : theme.ui.outline["1"].value}; // @todo add brand color
		}

		&:focus-within {
			&::before {
				box-shadow: inset 0 0 0 1px ${invalid ? "red" : theme.ui.colors.primary.value}; // @todo add brand color
			}
		}

		${StyledInput} {
			&:first-of-type {
				flex: 1;
				border-radius: ${pxToRem(theme.radius.s.value)} 0 0 ${pxToRem(theme.radius.s.value)};
			}

			&:last-of-type {
				border-radius: 0 ${pxToRem(theme.radius.s.value)} ${pxToRem(theme.radius.s.value)} 0;
			}
		}
	`};
`;
