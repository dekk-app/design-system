import { focusRing } from "@dekk-ui/focus-ring";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledInputWrapperProps } from "./types";

export const StyledInputWrapper = styled.span<StyledInputWrapperProps>`
	display: inline-flex;
	position: relative;
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	margin: ${pxToRem(-8)} ${pxToRem(-6)};
	${({ theme, isDisabled }) => css`
		${isDisabled &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};
		border-radius: ${pxToRem(theme.radius.s)};

		&:focus-within {
			${focusRing};
		}
	`};
`;

export const StyledRing = styled.div`
	position: absolute;
	border-radius: 50%;
	pointer-events: none;
	${({ theme }) => css`
		top: 50%;
		left: 50%;
		width: ${pxToRem(32)};
		height: ${pxToRem(32)};
		margin: ${pxToRem(-16)};
		box-shadow: 0 0 0 2px ${theme.ui.fill[3]};
	`};
`;

export const StyledBubble = styled.span`
	position: absolute;
	top: 0;
	left: 50%;
	border-radius: 50%;
	${({ theme }) => css`
		width: ${pxToRem(12)};
		height: ${pxToRem(12)};
		margin: ${pxToRem(-6)};
		background: ${theme.ui.colors.primary};
	`};
`;

export const StyledRange = styled.input`
	appearance: none;
	width: 100%;
	opacity: 0;
	pointer-events: none;
	&:focus {
		outline: 0;
	}
`;
