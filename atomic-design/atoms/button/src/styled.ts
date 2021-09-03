import { focusRing } from "@dekk-ui/focus-ring";
import { pxToRem } from "@dekk-ui/utils";
import { withPseudoClasses } from "@dekk-ui/utils/with-pseudo-classes";
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: max-content;
	margin: 0;
	border: 0;
	font-family: inherit;

	${withPseudoClasses(
		"focus",
		css`
			outline: 0;
		`
	)};

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

		${withPseudoClasses(
			"focus-visible",
			css`
				background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
				${focusRing};
			`
		)};

		${withPseudoClasses(
			"hover",
			css`
				background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
			`
		)};

		${withPseudoClasses(
			"active",
			css`
				background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
			`
		)};
	`};
`;
