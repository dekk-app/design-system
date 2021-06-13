import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LabelProps } from "./types";

export const StyledLabel = styled.label<LabelProps>`
	height: ${pxToRem(20)};
	font-size: ${pxToRem(12)};
	font-weight: 500;
	line-height: ${pxToRem(20)};
	${({ fullWidth }) => css`
		width: ${fullWidth ? "100%" : "auto"};
		margin: ${pxToRem(fullWidth ? 8 : 6)} 0;
	`};
`;
