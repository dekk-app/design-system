import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledAvatarWrapper = styled.div`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: ${pxToRem(32)};
	height: ${pxToRem(32)};
	margin: 2px;
	border-radius: 50%;
	vertical-align: bottom;
	${({ theme }) => css`
		background: ${theme.ui.background["1"]};
	`};
`;

export const StyledAvatar = styled.img`
	width: inherit;
	height: inherit;
	overflow: hidden;
	border-radius: inherit;
	${({ theme }) => css`
		box-shadow: 0 0 0 2px ${theme.ui.background["1"]};
	`};
`;

export const StyledAvatarText = styled.div`
	display: flex;
	position: relative;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: inherit;
	height: inherit;
	overflow: hidden;
	border-radius: inherit;
	font-size: ${pxToRem(12)};
	direction: ltr;
	${({ theme }) => css`
		background: ${theme.ui.background["2"]};
		box-shadow: 0 0 0 2px ${theme.ui.background["2"]};
		color: ${theme.ui.text["2"]};
	`};
`;
