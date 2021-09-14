import { focusRing } from "@dekk-ui/focus-ring";
import { StyledInput, StyledNumberInput } from "@dekk-ui/input-field";
import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PrefixProps, StyledCombinedInputProps } from "./types";

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

export const StyledCombinedInput = styled.label<StyledCombinedInputProps>`
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

	${({ theme, isInvalid, fullWidth, width, isDisabled }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${theme.ui.fill["2"]};
		color: ${theme.ui.text["1"]};

		${isDisabled &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};

		&:hover {
			${StyledInput}, ${StyledNumberInput}, ${StyledPrefix}, ${StyledSuffix} {
				background: inherit;
			}
		}

		&::before {
			box-shadow: inset 0 0 0 1px ${isInvalid ? "red" : theme.ui.outline["1"]}; // @todo add brand color
		}

		&:focus-within {
			${isInvalid
				? css`
						&::before {
							box-shadow: inset 0 0 0 2px red; // @todo add brand color
						}
				  `
				: focusRing};
		}

		${StyledInput}, ${StyledNumberInput} {
			box-shadow: none;

			&[disabled] {
				opacity: unset;
			}

			&:focus-visible {
				box-shadow: none;
			}

			&:first-of-type {
				flex: 1;
			}
			&:invalid {
				box-shadow: none;
			}
		}
	`};
`;
