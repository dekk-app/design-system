import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledInputWrapper = styled.span`
	display: block;
	position: relative;
	width: ${pxToRem(52)};
	height: ${pxToRem(52)};
`;

export const StyledRing = styled.div`
	position: absolute;
	border-radius: 50%;
	pointer-events: none;
	${({ theme }) => css`
		top: ${pxToRem(theme.space.xs.value)};
		right: ${pxToRem(theme.space.xs.value)};
		bottom: ${pxToRem(theme.space.xs.value)};
		left: ${pxToRem(theme.space.xs.value)};
		box-shadow: inset 0 0 0 2px ${theme.ui.fill[3].value};
	`};
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
		width: 0;
		height: 0;
		appearance: none;
		pointer-events: none;
	}

	${({ theme }) => css`
		width: ${pxToRem(theme.space.xs.value)};
		height: ${pxToRem(theme.space.xs.value)};
		margin: ${pxToRem(-theme.space.xxs.value)};
		background: ${theme.ui.colors.primary.value};

		&:focus-visible {
			box-shadow: 0 0 0 1px ${theme.ui.colors.primary.value};
		}
	`};
`;
