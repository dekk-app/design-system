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

	&::before {
		position: absolute;
		top: 50%;
		right: 0;
		width: 1px;
	}

	${({ theme, isSelected }) => css`
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["2"]};
		color: ${isSelected ? theme.ui.colors.lightest : theme.ui.text["1"]};
		&::before {
			content: ${isSelected ? "unset" : `""`};
		}
		&:hover {
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["1"]};
			&::before {
				content: unset;
			}
		}

		&:focus-visible {
			z-index: 1;
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["1"]};
			${focus};

			&::before {
				content: unset;
			}
		}

		&:last-of-type {
			&::before {
				content: unset;
			}
		}

		&::before {
			height: ${pxToRem(theme.space.xs)};
			margin-top: calc(${pxToRem(theme.space.xs)} / -2);
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.outline["1"]};
		}
	`};
`;
