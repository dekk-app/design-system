import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { pxToRem } from "@dekk-ui/utils";
import { LabelProps } from "./types";

export const StyledLabel = styled.input<LabelProps>`
	width: 236px;
	height: 20px;
	color: rgba(255, 255, 255, 1);
	font-size: 12px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 45px;
`;
