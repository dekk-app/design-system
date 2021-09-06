import { focus, focusRing } from "@dekk-ui/focus-ring";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CombinedInputProps, InputProps, PrefixProps } from "./types";

export const StyledPrefix = styled.div<PrefixProps>`
	overflow: hidden;
	font-size: ${pxToRem(12)};
	${({ theme, width }) => css`
		width: ${width || "auto"};
		height: ${pxToRem(theme.space.l)};
		padding: ${pxToRem(theme.space.xs)} 0 ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.xs)};
		line-height: ${pxToRem(theme.space.s)};
		border-radius: ${pxToRem(theme.radius.s)} 0 0 ${pxToRem(theme.radius.s)};
		background: inherit;
		color: inherit;
	`};
`;

export const StyledSuffix = styled.div<PrefixProps>`
	overflow: hidden;
	font-size: ${pxToRem(12)};
	${({ theme, width }) => css`
		width: ${width || "auto"};
		height: ${pxToRem(theme.space.l)};
		margin: 0 0 0 ${pxToRem(-theme.space.xs + 2)};
		padding: ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.xs)}
			${pxToRem(theme.space.xs - 2)};
		line-height: ${pxToRem(theme.space.s)};
		border-radius: 0 ${pxToRem(theme.radius.s)} ${pxToRem(theme.radius.s)} 0;
		background: inherit;
		color: inherit;
	`};
`;

export const StyledInput = styled.input<InputProps>`
	overflow: hidden;
	position: relative;
	border: 0;
	appearance: none;
	font-size: ${pxToRem(12)};

	&:focus {
		outline: 0;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ theme, fullWidth, width, textAlign }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
		padding: ${pxToRem(theme.space.xs)};
		line-height: ${pxToRem(theme.space.s)};
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${theme.ui.fill["2"]};
		color: ${theme.ui.text["1"]};
		box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"]};
		caret-color: ${theme.ui.colors.primary};
		text-align: ${textAlign};

		&:hover {
			background: ${theme.ui.fill["1"]};

			+ ${StyledSuffix} {
				background: ${theme.ui.fill["1"]};
			}
		}

		&:focus {
			${focus};
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

export const StyledCombinedInput = styled.label<CombinedInputProps>`
	display: inline-flex;
	position: relative;

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
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${theme.ui.fill["2"]};
		color: ${theme.ui.text["1"]};

		&:hover {
			background: ${theme.ui.fill["1"]};
			${StyledInput}, ${StyledNumberInput} {
				background: inherit;
			}
		}
		&::before {
			box-shadow: inset 0 0 0 1px ${invalid ? "red" : theme.ui.outline["1"]}; // @todo add brand color
		}

		&:focus-within {
			${focusRing};
		}
		${StyledInput}, ${StyledNumberInput} {
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
