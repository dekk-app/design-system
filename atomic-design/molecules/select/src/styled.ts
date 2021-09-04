import { focus, focusRing } from "@dekk-ui/focus-ring";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactSelectProps, StyledSelectProps } from "./types";

export const StyledSelect = styled.div<StyledSelectProps>`
	display: inline-block;
	position: relative;
	vertical-align: bottom;
	${({ theme, fullWidth, width, flex, isDisabled }) => css`
		${isDisabled &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};
		flex: ${flex ? 1 : "initial"};
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.xl)};
	`};
`;

export const StyledPopoutMenu = styled.div``;

export const StyledSingleValue = styled.div`
	background: none;
	color: inherit;
`;

export const StyledInput = styled.input<ReactSelectProps>`
	min-width: 1ex;
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	color: inherit;
	font-family: inherit;
	font-size: 1em;
	font-weight: inherit;

	&:focus {
		outline: 0;
	}
`;

export const StyledIndicatorsContainer = styled.div<ReactSelectProps>`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	${({ theme }) => css`
		width: ${pxToRem(theme.space.m)};
		height: ${pxToRem(theme.space.m)};
		margin: ${pxToRem(theme.space.xxs)};
		color: ${theme.ui.fill[4]};
	`};
`;

export const StyledOption = styled.div<ReactSelectProps>`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: flex-start;
	height: ${pxToRem(28)};
	padding: ${pxToRem(4)} ${pxToRem(8)};
	font-family: inherit;
	font-size: ${pxToRem(14)};
	font-weight: 300;
	line-height: ${pxToRem(20)};
	${({ theme, isSelected, isFocused, isDisabled }) => css`
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${isSelected ? theme.ui.fill[2] : isFocused ? theme.ui.fill[1] : "none"};
		color: ${theme.ui.text[1]};
		opacity: ${isDisabled ? 0.2 : 1};
	`};
`;

export const StyledControl = styled.div<ReactSelectProps>`
	display: flex;
	overflow: hidden;
	border: 0;
	appearance: none;
	font-size: 12px;

	&:focus {
		outline: 0;
	}

	${({ theme, isFocused }) => css`
		min-width: ${pxToRem(theme.space.l)};
		height: ${pxToRem(theme.space.l)};
		line-height: ${pxToRem(theme.space.s)};
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${isFocused ? theme.ui.fill["1"] : theme.ui.fill["2"]};
		color: ${theme.ui.text["1"]};
		box-shadow: inset 0 0 0 1px ${theme.ui.outline["1"]};
		caret-color: ${theme.ui.colors.primary};

		${isFocused && focusRing}

		&:hover {
			background: ${theme.ui.fill["1"]};
		}
		&:focus {
			${focus};
		}
	`};
`;
export const StyledPopoutControl = styled.div<ReactSelectProps>`
	display: flex;
	overflow: hidden;
	border: 0;
	appearance: none;
	font-size: 12px;

	&:focus {
		outline: 0;
	}

	${({ theme, isFocused }) => css`
		min-width: ${pxToRem(theme.space.l)};
		margin: 0 ${pxToRem(theme.space.xs)} ${pxToRem(theme.space.xs)};
		padding-bottom: ${pxToRem(theme.space.xs)};
		line-height: ${pxToRem(20)};
		background: ${theme.ui.background["1"]};
		color: ${theme.ui.text["1"]};
		box-shadow: inset 0 -1px 0 ${isFocused ? theme.ui.colors.primary : theme.ui.outline["1"]};
		caret-color: ${theme.ui.colors.primary};
	`};
`;
export const StyledValueContainer = styled.div`
	display: flex;
	position: relative;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: flex-start;
	padding: ${pxToRem(2)} ${pxToRem(8)};
`;
export const StyledPopoutValueContainer = styled.div`
	display: flex;
	position: relative;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: flex-start;
	padding: ${pxToRem(2)} 0;
`;
export const StyledBlanket = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;
export const StyledPlaceholder = styled.div`
	position: absolute;
	top: 50%;
	padding: 0 ${pxToRem(2)};
	transform: translateY(-50%);
	color: hsl(0, 0%, 50%);
`;

export const StyledMenu = styled.div`
	position: absolute;
	z-index: 1;
	top: calc(100% + ${pxToRem(8)});
	right: ${pxToRem(-8)};
	left: ${pxToRem(-8)};
	padding: ${pxToRem(12)} ${pxToRem(8)};
	${({ theme }) => css`
		box-shadow: inset 0 0 0 1px ${theme.ui.outline[1]},
			0 ${pxToRem(30)} ${pxToRem(27)} rgba(0, 0, 0, 0.09);
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${theme.ui.background[1]};
		color: ${theme.ui.text[1]};
	`};
`;
