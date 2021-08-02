import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
	display: inline-flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	margin: 0;
	border: 0;

	&:focus {
		outline: 0;
	}

	${({ theme, isSelected }) => css`
		padding: ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.s)};
		background: ${isSelected ? theme.palette.darkPurple : theme.ui.colors.primary};
		color: ${theme.ui.colors.lightest};
		border-radius: ${pxToRem(theme.radius.s)};

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
