import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Except } from "type-fest";
import { IconButtonProps } from "./types";

export const StyledSvg = styled.svg`
	fill: currentColor;
`;

export const StyledPath = styled.path`
	fill: currentColor;
`;

export const StyledButton = styled.button<Except<IconButtonProps, "icon" | "size">>`
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

	${StyledSvg} {
		pointer-events: none;
	}

	${({ theme, isSelected }) => css`
		width: ${pxToRem(theme.space.l.value)};
		min-width: ${pxToRem(theme.space.l.value)};
		height: ${pxToRem(theme.space.l.value)};
		background: ${isSelected ? theme.ui.colors.primary.value : "none"};
		color: ${isSelected ? theme.ui.colors.lightest.value : "currentColor"};
		border-radius: ${pxToRem(theme.radius.s.value)};

		&:focus-visible {
			background: ${isSelected ? theme.ui.colors.primary.value : theme.ui.fill["1"].value};
			box-shadow: ${isSelected
				? `inset 0 0 0 1px ${theme.ui.colors.primary.value}, inset  0 0 0 2px ${theme.ui.fill["2"].value}`
				: `inset 0 0 0 1px ${theme.ui.colors.primary.value}`};
		}

		&:hover {
			background: ${isSelected ? theme.ui.colors.primary.value : theme.ui.fill["1"].value};
		}
	`};
`;
