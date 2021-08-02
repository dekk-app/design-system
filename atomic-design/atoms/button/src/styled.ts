import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./types";

const StyledButtonBase = styled.button<ButtonProps>`
	display: inline-flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	border: 0;

	&:focus {
		outline: 0;
	}

	${({ theme, isSelected }) => css`
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${isSelected ? theme.ui.colors.primary : "none"};
		color: ${isSelected ? theme.ui.colors.lightest : theme.ui.text["1"]};

		&:hover {
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["1"]};
		}

		&:focus-visible {
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["1"]};
			box-shadow: ${isSelected
				? `inset 0 0 0 1px ${theme.ui.colors.primary}, inset  0 0 0 2px ${theme.ui.fill["2"]}`
				: `inset 0 0 0 1px ${theme.ui.colors.primary}`};
		}
	`};
`;

export const StyledButton = styled(StyledButtonBase)`
	${({ theme, isSelected }) => css`
		padding: ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.s)};
		background: ${isSelected ? theme.palette.darkPurple : theme.ui.colors.primary};

		&:hover {
			background: ${isSelected ? theme.ui.colors.primary : theme.palette.darkPurple};
		}

		&:focus-visible {
			background: ${isSelected ? theme.palette.darkPurple : theme.ui.colors.primary};
			box-shadow: ${isSelected
				? `inset 0 0 0 1px ${theme.palette.darkPurple}, inset  0 0 0 2px ${theme.ui.fill["2"]}`
				: `inset 0 0 0 1px ${theme.ui.colors.primary}, inset  0 0 0 2px ${theme.ui.fill["2"]}`};
		}
	`};
`;

export const StyledSvg = styled.svg`
	fill: currentColor;
`;

export const StyledPath = styled.path`
	fill: currentColor;
`;

export const StyledIconButton = styled(StyledButtonBase)`
	${StyledSvg} {
		pointer-events: none;
	}

	${({ theme }) => css`
		width: ${pxToRem(theme.space.l)};
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
	`}
`;

export const StyledToggleButton = styled(StyledButtonBase)`
	position: relative;
	flex: 1;
	width: 100%;
	height: 100%;

	&::before {
		position: absolute;
		top: 50%;
		right: 0;
		width: 1px;
	}

	${({ theme, isSelected }) => css`
		background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["2"]};

		&::before {
			content: ${isSelected ? "unset" : `""`};
			height: ${pxToRem(theme.space.xs)};
			margin-top: calc(${pxToRem(theme.space.xs)} / -2);
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.outline["1"]};
		}
	`}

	&:hover,
  &:focus-visible,
  &:last-of-type {
		&::before {
			content: unset;
		}
	}

	&:focus-visible {
		z-index: 1;
	}
`;
