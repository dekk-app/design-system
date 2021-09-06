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
	font-family: inherit;
	white-space: nowrap;

	&:focus {
		outline: 0;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ theme, variant = "default" }) => css`
		padding: ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.s)};
		background-color: ${variant === "primary"
			? theme.ui.colors.primary
			: variant === "default"
			? theme.ui.fill["1"]
			: "transparent"};
		color: ${variant === "primary"
			? theme.ui.colors.lightest
			: variant === "default"
			? theme.ui.text["1"]
			: "currentColor"};
		border-radius: ${pxToRem(theme.radius.s)};

		&:focus-visible {
			${focusRing};
		}

		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
		}

		&:active {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
		}
	`};
`;
