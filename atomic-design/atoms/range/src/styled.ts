import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { RangeProps } from "./types";

export const StyledInputWrapper = styled.div<Pick<RangeProps, "width" | "fullWidth">>`
	--track-height: 2px;

	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	${({ width, fullWidth }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
	`};
`;

export const StyledProgress = styled.div`
	position: absolute;
	top: 50%;
	right: ${pxToRem(12)};
	left: 0;
	height: var(--track-height);
	margin-top: calc(var(--track-height) / -2);
	transform-origin: 0 50%;
	pointer-events: none;
	${({ theme }) => css`
		background: ${theme.ui.colors.primary};
	`};
`;

const thumb = css`
	width: ${pxToRem(12)};
	height: ${pxToRem(12)};
	border: 0;
	border-radius: 50%;
	appearance: none;
`;

const track = css`
	height: var(--track-height);
	appearance: none;
`;

export const StyledRange = styled.input`
	width: 100%;
	margin: 0;
	padding: 0;
	appearance: none;
	background: none;

	&:focus {
		outline: 0;
	}

	&::-webkit-slider-thumb {
		${thumb};
		margin-top: calc(${pxToRem(-6)} + var(--track-height) / 2);
	}

	&::-webkit-slider-runnable-track {
		${track};
	}

	&::-moz-range-thumb {
		${thumb};
	}

	&::-moz-range-track {
		${track};
	}

	${({ theme }) => css`
		height: ${pxToRem(theme.space.l)};
		border-radius: ${pxToRem(theme.radius.s)};

		&::-webkit-slider-thumb {
			background: ${theme.ui.colors.primary};
		}

		&::-webkit-slider-runnable-track {
			background: ${theme.ui.fill["3"]};
		}

		&::-moz-range-thumb {
			background: ${theme.ui.colors.primary};
		}

		&::-moz-range-track {
			background: ${theme.ui.fill["3"]};
		}

		&:focus-visible {
			background: ${theme.ui.fill["1"]};
			box-shadow: 0 0 0 1px ${theme.ui.colors.primary};
		}
	`};
`;
