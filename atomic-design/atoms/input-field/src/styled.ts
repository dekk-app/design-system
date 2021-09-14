import { focus } from "@dekk-ui/focus-ring";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
	overflow: hidden;
	position: relative;
	border: 0;
	appearance: none;
	font-size: ${pxToRem(12)};

	&:focus {
		outline: 0;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	${({ theme, fullWidth, width, textAlign }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
		padding: ${pxToRem(theme.space.xs)};
		line-height: ${pxToRem(theme.space.s)};
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${theme.ui.fill["2"]};
		color: ${theme.ui.text["1"]};
		box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"]};
		caret-color: ${theme.ui.colors.primary};
		text-align: ${textAlign};

		&:focus {
			${focus};
		}

		&:invalid {
			box-shadow: inset 0 0 0 1px red; // @todo add brand color
		}
	`};
`;

export const StyledNumberInput = styled(StyledInput)`
	&[type="number"] {
		-moz-appearance: textfield;

		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			margin: 0;
			appearance: none;
		}
	}
`;
