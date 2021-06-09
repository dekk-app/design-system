import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CombinedInputProps, InputProps, PrefixProps } from "./types";

export const StyledInput = styled.input<InputProps>`
	overflow: hidden;
	border: 0;
	appearance: none;
	font-size: 12px;

	&:focus {
		outline: 0;
	}

	${({ theme, fullWidth, width, textAlign }) => css`
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
		text-align: ${textAlign};

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
		-moz-appearance: textfield;

		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			margin: 0;
			appearance: none;
		}
	}
`;

export const StyledPrefix = styled.div<PrefixProps>`
	overflow: hidden;
	font-size: 12px;
	${({ theme, width }) => css`
		width: ${width || "auto"};
		height: ${pxToRem(theme.space.l.value)};
		padding: ${pxToRem(theme.space.xs.value)} 0 ${pxToRem(theme.space.xs.value)}
			${pxToRem(theme.space.xs.value)};
		line-height: ${pxToRem(theme.space.s.value)};
		border-radius: ${pxToRem(theme.radius.s.value)} 0 0 ${pxToRem(theme.radius.s.value)};
		background: inherit;
		color: inherit;
	`};
`;

export const StyledSuffix = styled.div<PrefixProps>`
	overflow: hidden;
	font-size: 12px;
	${({ theme, width }) => css`
		width: ${width || "auto"};
		height: ${pxToRem(theme.space.l.value)};
		margin: 0 0 0 ${pxToRem(-theme.space.xs.value + 2)};
		padding: ${pxToRem(theme.space.xs.value)} ${pxToRem(theme.space.xs.value)}
			${pxToRem(theme.space.xs.value)} 0;
		line-height: ${pxToRem(theme.space.s.value)};
		border-radius: 0 ${pxToRem(theme.radius.s.value)} ${pxToRem(theme.radius.s.value)} 0;
		background: inherit;
		color: inherit;
	`};
`;

export const StyledCombinedInput = styled.label<CombinedInputProps>`
	display: inline-flex;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		z-index: 0;
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
		background: ${theme.ui.fill["2"].value};
		color: ${theme.ui.text["1"].value};

		&:hover {
			background: ${theme.ui.fill["1"].value};
		}
		&::before {
			box-shadow: inset 0 0 0 1px ${invalid ? "red" : theme.ui.outline["1"].value}; // @todo add brand color
		}

		&:focus-within {
			background: ${theme.ui.fill["1"].value};
			&::before {
				box-shadow: inset 0 0 0 1px ${invalid ? "red" : theme.ui.colors.primary.value}; // @todo add brand color
			}
		}
		${StyledInput}, ${StyledNumberInput} {
			border-radius: 0;
			background: inherit;
			box-shadow: none;

			&:focus-visible {
				box-shadow: none;
			}
			&:first-of-type {
				flex: 1;
			}
		}
	`};
`;
