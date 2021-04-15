import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { pxToRem } from "@dekk-ui/utils";
import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
	border: 0;
	appearance: none;
	font-size: 12px;
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
			outline: 0;
			box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary.value};
		}

		&:invalid {
			box-shadow: inset 0 0 0 1px red;
		}
	`};

	&[type="number"]::-webkit-inner-spin-button,
	&[type="number"]::-webkit-outer-spin-button {
		margin: 0;
		appearance: none;
	}
`;

export const StyledColorInput = styled.input<InputProps>`
	border: 0;
	appearance: none;
	${({ theme }) => css`
		width: ${pxToRem(theme.space.l.value)};
		min-width: ${pxToRem(theme.space.l.value)};
		height: ${pxToRem(theme.space.l.value)};
		padding: 0;
		border-radius: 0 ${pxToRem(theme.radius.s.value)} ${pxToRem(theme.radius.s.value)} 0;
		box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"].value};

		&[type="color"]::-webkit-color-swatch {
			border: 0;
			border-radius: 0 ${pxToRem(theme.radius.s.value)} ${pxToRem(theme.radius.s.value)} 0;
		}

		&:focus {
			outline: 0;

			&[type="color"]::-webkit-color-swatch {
				box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary.value};
			}
		}
	`};

	&[type="color"]::-webkit-color-swatch-wrapper {
		padding: 0;
	}
`;

export const StyledCombinedInput = styled.span<{ invalid?: boolean }>`
	display: inline-flex;
	position: relative;
	${({ theme, invalid }) => css`
		border-radius: ${pxToRem(theme.radius.s.value)};
		&::before {
			content: "";
			position: absolute;
			z-index: 1;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: inherit;
			box-shadow: inset 0 0 0 1px ${invalid ? "red" : theme.ui.outline["1"].value};
			pointer-events: none;
		}

		&:focus-within {
			&::before {
				box-shadow: inset 0 0 0 1px ${invalid ? "red" : theme.ui.colors.primary.value};
			}
		}

		${StyledInput}:first-of-type {
			border-radius: ${pxToRem(theme.radius.s.value)} 0 0 ${pxToRem(theme.radius.s.value)};
			box-shadow: none;
		}
		${StyledColorInput}:last-of-type {
			border-radius: 0 ${pxToRem(theme.radius.s.value)} ${pxToRem(theme.radius.s.value)} 0;
			//box-shadow: none;
		}
	`};
`;
