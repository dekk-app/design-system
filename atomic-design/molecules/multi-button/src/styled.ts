import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MultiButtonProps } from "./types";

export const StyledMultiButton = styled.div<MultiButtonProps>`
	display: inline-grid;
	grid-auto-columns: auto;
	grid-auto-flow: column;
	${({ theme, fullWidth, width }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
		line-height: ${pxToRem(theme.space.s)};
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${theme.ui.fill["2"]};
		color: ${theme.ui.text["1"]};
		border: 1px solid ${theme.ui.outline["1"]};
	`};
`;
