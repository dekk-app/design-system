import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LabelProps } from "./types";

export const StyledLabel = styled.label<LabelProps>`
	display: flex;
	align-content: center;
	align-items: center;
	font-size: ${pxToRem(16)};
	font-weight: 500;
	line-height: ${pxToRem(20)};
	${({ theme, fullWidth }) => css`
		width: ${fullWidth ? "100%" : "auto"};
		height: ${pxToRem(theme.space.l)};
		padding: ${pxToRem(theme.space.xxs)} ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.xxs)}
			0;
	`};
`;
