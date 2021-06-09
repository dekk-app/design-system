import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SelectProps } from "./types";

export const StyledSelect = styled.div<SelectProps>`
	position: relative;
	display: inline-block;
	vertical-align: bottom;
	${({ theme, fullWidth, width, flex }) => css`
		flex: ${flex ? 1 : "initial"};
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.xl.value)};
	`};
`;
