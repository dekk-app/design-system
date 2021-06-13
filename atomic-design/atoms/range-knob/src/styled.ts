import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledInputWrapper = styled.span`
	display: inline-flex;
	position: relative;
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	margin: ${pxToRem(-8)} ${pxToRem(-6)};
	${({ theme }) => css`
		&:focus-within {
			background: ${theme.ui.fill["1"]};
			box-shadow: 0 0 0 1px ${theme.ui.colors.primary};
			border-radius: ${pxToRem(theme.radius.s)};
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

const thumb = css`
	width: 0;
	height: 0;
	border: 0;
	appearance: none;
	pointer-events: none;
`;

export const StyledBubble = styled.input`
	position: absolute;
	appearance: none;
	top: 0;
	left: 50%;
	border-radius: 50%;

	&:focus {
		outline: 0;
	}

	&::-webkit-slider-thumb {
		${thumb};
	}

	&::-moz-range-thumb {
		${thumb};
	}

	${({ theme }) => css`
		width: ${pxToRem(12)};
		height: ${pxToRem(12)};
		margin: ${pxToRem(-6)};
		background: ${theme.ui.colors.primary};
	`};
`;
