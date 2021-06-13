import { ColorInput } from "@dekk-ui/color-input-field";
import { Icon } from "@dekk-ui/icon";
import { IconButton } from "@dekk-ui/icon-button";
import { IconSize } from "@dekk-ui/icons";
import {
	NumberInput,
	StyledCombinedInput,
	StyledPrefix,
	StyledSuffix,
	TextInput,
} from "@dekk-ui/input-field";
import { InputLabel } from "@dekk-ui/input-label";
import { Range } from "@dekk-ui/range";
import { RangeKnob } from "@dekk-ui/range-knob";
import { PopoutSelect, Select } from "@dekk-ui/select";
import { clamp } from "@dekk-ui/utils/clamp";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC, forwardRef, HTMLAttributes, useCallback, useState } from "react";

const options = [
	{ value: "bold", label: <strong style={{ fontWeight: 700 }}>Bold</strong> },
	{ value: "semibold", label: <strong style={{ fontWeight: 600 }}>Semibold</strong> },
	{ value: "normal", label: <em style={{ fontWeight: 400, fontStyle: "normal" }}>Normal</em> },
	{ value: "light", label: <em style={{ fontWeight: 300, fontStyle: "normal" }}>Light</em> },
];

const makeNumbers = (to, from = 0) =>
	new Array(to - from)
		.fill(Boolean)
		.map((x, i) => ({ value: `${i + from}`, label: `${i + from}` }));

const numbers = makeNumbers(20, 10);
const letterSpacing = makeNumbers(12);

interface GridProps {
	column?: string;
	columns?: string;
	gap?: string;
	fullWidth?: boolean;
}

const StyledGrid = styled.fieldset<GridProps>`
	display: inline-grid;
	justify-content: stretch;
	justify-items: center;
	margin: 0;
	padding: 0;
	border: 0;

	> :first-of-type {
		justify-self: start;
	}

	> :last-child {
		justify-self: end;
	}

	${({ column, columns, gap, fullWidth }) => css`
		width: ${fullWidth ? "100%" : "auto"};
		max-width: 100%;
		grid-auto-columns: ${column ?? "initial"};
		grid-auto-flow: ${column ? "column" : "initial"};
		grid-column-gap: ${gap ?? pxToRem(8)};
		grid-template-columns: ${columns ?? "initial"};
	`};
`;

export const GridRow: FC<GridProps> = ({ children, ...props }) => {
	return <StyledGrid {...props}>{children}</StyledGrid>;
};

interface MultiButtonsProps {
	fullWidth?: boolean;
	width?: string;
}

interface MultiButtonProps extends HTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
}

const StyledMultiButtons = styled.div<MultiButtonsProps>`
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

export const MultiButtons: FC<MultiButtonsProps> = ({ children, width, fullWidth }) => {
	return (
		<StyledMultiButtons width={width} fullWidth={fullWidth}>
			{children}
		</StyledMultiButtons>
	);
};

const StyledMultiButton = styled.button<MultiButtonProps>`
	display: inline-flex;
	position: relative;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	border: 0;

	&:focus {
		outline: 0;
	}

	&::before {
		position: absolute;
		top: 50%;
		right: 0;
		width: 1px;
	}

	${({ theme, isSelected }) => css`
		border-radius: ${pxToRem(theme.radius.s)};
		background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["2"]};
		color: ${isSelected ? theme.ui.colors.lightest : theme.ui.text["1"]};
		&::before {
			content: ${isSelected ? "unset" : `""`};
		}
		&:hover {
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["1"]};
			&::before {
				content: unset;
			}
		}

		&:focus-visible {
			z-index: 1;
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.fill["1"]};
			box-shadow: ${isSelected
				? `inset 0 0 0 1px ${theme.ui.colors.primary}, inset  0 0 0 2px ${theme.ui.fill["2"]}`
				: `inset 0 0 0 1px ${theme.ui.colors.primary}`};
			&::before {
				content: unset;
			}
		}

		&:last-of-type {
			&::before {
				content: unset;
			}
		}

		&::before {
			height: ${pxToRem(theme.space.xs)};
			margin-top: calc(${pxToRem(theme.space.xs)} / -2);
			background: ${isSelected ? theme.ui.colors.primary : theme.ui.outline["1"]};
		}
	`};
`;

export const MultiButton: FC<MultiButtonProps> = ({ className, children, ...props }) => {
	return (
		<StyledMultiButton {...props} className={className}>
			{children}
		</StyledMultiButton>
	);
};

const InputWrapper = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const Home = () => {
	return (
		<div style={{ padding: 32, width: 300 }}>
			<TextInput fullWidth />
			<br />
			<ColorInput fullWidth defaultValue="#000000" />
			<br />
			<MultiButtons fullWidth>
				<MultiButton isSelected>
					<Icon icon="editorText" size={IconSize.s} />
				</MultiButton>
				<MultiButton>
					<Icon icon="editorImage" size={IconSize.s} />
				</MultiButton>
				<MultiButton>
					<Icon icon="menu" size={IconSize.s} />
				</MultiButton>
				<MultiButton>
					<Icon icon="plus" size={IconSize.s} />
				</MultiButton>
			</MultiButtons>
			<br />
			<br />
			<InputWrapper>
				<InputLabel htmlFor="icon-button-0">Alignment</InputLabel>
				<GridRow column="min-content">
					<IconButton id="icon-button-0" icon="editorImage" size={IconSize.s} />
					<IconButton isSelected icon="editorText" size={IconSize.s} />
				</GridRow>
			</InputWrapper>
			<br />
			<GridRow fullWidth column={pxToRem(32)}>
				<IconButton icon="chevronUp" />
				<IconButton icon="chevronRight" />
				<IconButton icon="chevronDown" />
				<IconButton icon="chevronLeft" />
			</GridRow>
			<br />
			<GridRow fullWidth column={pxToRem(32)}>
				<IconButton icon="chevronUp" size={IconSize.s} />
				<IconButton icon="chevronRight" size={IconSize.s} />
				<IconButton icon="chevronDown" size={IconSize.s} />
				<IconButton icon="chevronLeft" size={IconSize.s} />
			</GridRow>
			<br />
			<br />
			<InputWrapper>
				<InputLabel htmlFor="text-input-0">Text Label</InputLabel>
				<TextInput id="text-input-0" />
			</InputWrapper>
			<br />
			<br />
			<InputWrapper>
				<InputLabel fullWidth htmlFor="text-input-1">
					Text Label
				</InputLabel>
				<TextInput fullWidth id="text-input-1" />
			</InputWrapper>
			<br />
			<br />
			<InputWrapper>
				<InputLabel fullWidth htmlFor="text-input-2">
					Text Label
				</InputLabel>
				<TextInput id="text-input-2" />
			</InputWrapper>
			<br />
			<br />
			<Range fullWidth min={0} max={100} defaultValue={30} />
			<br />
			<br />
			<Select fullWidth options={options} />
			<br />
			<br />
			<Select placeholder="Select…" width="132px" options={options} />
			<br />
			<br />
			<GridRow column="auto">
				<RangeKnob min={4} max={8} />
				<RangeKnob min={0} max={10} />
				<RangeKnob min={0} max={4} />
				<RangeKnob min={0} max={360} step={360 / 8} />
			</GridRow>
			<br />
			<br />
			<InputWrapper>
				<InputLabel htmlFor="select-0">Letter Spacing</InputLabel>
				<Select
					placeholder="0"
					id="select-0"
					width="132px"
					maxMenuHeight={150}
					options={letterSpacing}
				/>
			</InputWrapper>
			<br />
			<br />
			<PopoutSelect fullWidth placeholder="Search…" options={options} />
			<br />
			<br />
			<GridRow fullWidth column="auto">
				<StyledCombinedInput fullWidth>
					<StyledPrefix width="24px">X:</StyledPrefix>
					<NumberInput />
				</StyledCombinedInput>
				<StyledCombinedInput fullWidth>
					<StyledPrefix width="24px">Y:</StyledPrefix>
					<NumberInput />
				</StyledCombinedInput>
			</GridRow>
			<br />
			<br />
			<GridRow fullWidth column="auto">
				<StyledCombinedInput fullWidth>
					<StyledPrefix width="24px">W:</StyledPrefix>
					<NumberInput />
				</StyledCombinedInput>
				<StyledCombinedInput fullWidth>
					<StyledPrefix width="24px">H:</StyledPrefix>
					<NumberInput />
				</StyledCombinedInput>
			</GridRow>
			<br />
			<br />
			<GridRow fullWidth column={`${pxToRem(64)}`}>
				<StyledCombinedInput fullWidth>
					<NumberInput textAlign="right" />
					<StyledSuffix>kg</StyledSuffix>
				</StyledCombinedInput>
				<StyledCombinedInput fullWidth>
					<NumberInput textAlign="right" min={0} max={180} />
					<StyledSuffix>°</StyledSuffix>
				</StyledCombinedInput>
			</GridRow>
			<br />
			<br />
			<GridRow fullWidth column={`auto ${pxToRem(64)}`}>
				<Select fullWidth flex placeholder="Select…" options={options} />
				<Select fullWidth placeholder="0" options={numbers} />
			</GridRow>
		</div>
	);
};

export default Home;
