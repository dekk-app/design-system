import { focus } from "@dekk-ui/focus-ring";
import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ToggleButtonProps } from "./types";

export const StyledToggleButton = styled.button<ToggleButtonProps>`
	display: inline-flex;
	position: relative;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	border: 0;

	&:focus {
		outline: 0;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ theme, isSelected }) => css`
		height: ${pxToRem(theme.space.l)};
		border-radius: ${pxToRem(theme.radius.s)};
		background-color: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["2"]};
		color: ${isSelected ? theme.ui.colors.lightest : theme.ui.text["1"]};

		&:focus-visible {
			z-index: 1;
			${focus};
		}

		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
		}

		&:active {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
		}
	`};
`;
