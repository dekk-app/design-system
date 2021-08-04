import { focusRing } from "@dekk-ui/focus-ring";
import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
	display: inline-flex;
	position: relative;
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
		background: ${isSelected ? theme.ci.colors.primaryDark : theme.ui.colors.primary};
		color: ${theme.ui.colors.lightest};
		border-radius: ${pxToRem(theme.radius.s)};

		&:hover {
			background: ${isSelected ? theme.ui.colors.primary : theme.ci.colors.primaryDark};
		}

		&:focus-visible {
			background: ${isSelected ? theme.ci.colors.primaryDark : theme.ui.colors.primary};
			${focusRing};
		}
	`};
`;
