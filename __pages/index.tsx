import { Avatar, StyledAvatarWrapper } from "@dekk-ui/avatar";
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
import { clamp, pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import faker from "faker";
import React, { forwardRef, useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

interface User {
	id: string;
	firstName: string;
	lastName: string;
	name: string;
	email: string;
	avatar: string;
}

const users: User[] = Array(10)
	.fill(Boolean)
	.map(() => {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		return {
			id: uuid(),
			firstName,
			lastName,
			name: faker.name.findName(firstName, lastName),
			email: faker.internet.email(firstName, lastName),
			avatar: faker.image.avatar(),
		};
	});

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

const pick = <T extends unknown = unknown>(array: T[], n: number) => {
	const a = [...array];
	return a.splice(0, n);
};

const InputWrapper = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

interface RangeKnobFieldProps {
	id: string;
	label: string;
	name?: string;
	step?: number;
	max?: number;
	min?: number;
}

const RangeKnobField = forwardRef<
	HTMLInputElement,
	RangeKnobFieldProps & { prefix?: string; suffix?: string }
>(({ id, label, name, max = 100, min = 0, step = 1, prefix, suffix }, ref) => {
	const [value, setValue] = useState(min);
	const handleChange = useCallback(newValue => {
		setValue(
			newValue <= min
				? clamp((newValue + max) % max, max, min)
				: clamp(newValue % max, max, min)
		);
	}, []);
	return (
		<GridRow fullWidth columns={`1fr ${pxToRem(36)} 1fr`} gap={pxToRem(8)}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<RangeKnob
				id={`__${id}__`}
				value={value}
				step={step}
				min={min}
				max={max}
				tabIndex={-1}
				onChange={handleChange}
			/>
			<StyledCombinedInput width={pxToRem(64)} as="span">
				{prefix && <StyledPrefix>{prefix}</StyledPrefix>}
				<NumberInput
					ref={ref}
					fullWidth
					id={id}
					name={name}
					value={`${value}`}
					step={step}
					max={max}
					textAlign="right"
					onChange={handleChange}
				/>
				{suffix && <StyledSuffix>{suffix}</StyledSuffix>}
			</StyledCombinedInput>
		</GridRow>
	);
});

interface RangeFieldProps {
	id: string;
	label: string;
	name?: string;
	step?: number;
	max?: number;
	min?: number;
}

const RangeField = forwardRef<
	HTMLInputElement,
	RangeFieldProps & { prefix?: string; suffix?: string }
>(({ id, label, name, max = 100, min = 0, step = 1, prefix, suffix }, ref) => {
	const [value, setValue] = useState(min);
	const handleChange = useCallback(newValue => {
		setValue(clamp(newValue, max, min));
	}, []);
	return (
		<InputWrapper>
			<InputLabel fullWidth htmlFor={id}>
				{label}
			</InputLabel>
			<GridRow fullWidth columns={`auto ${pxToRem(64)}`} gap={pxToRem(32)}>
				<Range
					fullWidth
					id={`__${id}__`}
					value={value}
					step={step}
					min={min}
					max={max}
					tabIndex={-1}
					onChange={handleChange}
				/>
				<StyledCombinedInput fullWidth as="span">
					{prefix && <StyledPrefix>{prefix}</StyledPrefix>}
					<NumberInput
						ref={ref}
						fullWidth
						id={id}
						name={name}
						value={`${value}`}
						step={step}
						min={min}
						max={max}
						textAlign="right"
						onChange={handleChange}
					/>
					{suffix && <StyledSuffix>{suffix}</StyledSuffix>}
				</StyledCombinedInput>
			</GridRow>
		</InputWrapper>
	);
});

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

export const GridRow: React.FC<GridProps> = ({ children, ...props }) => {
	return <StyledGrid {...props}>{children}</StyledGrid>;
};

const StyledAvatars = styled.div`
	display: inline-grid;
	grid-auto-flow: dense;
	grid-column-gap: 0;
	grid-template-columns: repeat(4, ${pxToRem(20)});

	${StyledAvatarWrapper} {
		&:nth-last-child(1) {
			grid-column: 1;
		}
		&:nth-last-child(2) {
			grid-column: 2;
		}
		&:nth-last-child(3) {
			grid-column: 3;
		}
		&:nth-last-child(4) {
			grid-column: 4;
		}
	}
`;

export const Avatars: React.FC<{ people: User[] }> = ({ people, ...props }) => {
	const more = people.length > 4;
	const maxPeople = React.useMemo(() => pick(people, people.length < 5 ? people.length : 3), [
		people,
	]);
	return (
		<StyledAvatars {...props}>
			{maxPeople.map(user => {
				return <Avatar key={user.id} src={user.avatar} alt={user.name} />;
			})}
			{more && <Avatar>+5</Avatar>}
		</StyledAvatars>
	);
};

interface MultiButtonsProps {
	fullWidth?: boolean;
	width?: string;
}

interface MultiButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
}

const StyledMultiButtons = styled.div<MultiButtonsProps>`
	display: inline-grid;
	grid-auto-columns: auto;
	grid-auto-flow: column;
	${({ theme, fullWidth, width }) => css`
		width: ${fullWidth ? "100%" : width || "auto"};
		min-width: ${pxToRem(theme.space.l.value)};
		height: ${pxToRem(theme.space.l.value)};
		line-height: ${pxToRem(theme.space.s.value)};
		border-radius: ${pxToRem(theme.radius.s.value)};
		background: ${theme.ui.fill["2"].value};
		color: ${theme.ui.text["1"].value};
		border: 1px solid ${theme.ui.outline["1"].value};
	`};
`;

export const MultiButtons: React.FC<MultiButtonsProps> = ({ children, width, fullWidth }) => {
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
		border-radius: ${pxToRem(theme.radius.s.value)};
		background: ${isSelected ? theme.ui.colors.primary.value : theme.ui.fill["2"].value};
		color: ${isSelected ? theme.ui.colors.lightest.value : theme.ui.text["1"].value};
		&::before {
			content: ${isSelected ? "unset" : `""`};
		}
		&:hover {
			background: ${isSelected ? theme.ui.colors.primary.value : theme.ui.fill["1"].value};
			&::before {
				content: unset;
			}
		}

		&:focus-visible {
			z-index: 1;
			background: ${isSelected ? theme.ui.colors.primary.value : theme.ui.fill["1"].value};
			box-shadow: ${isSelected
				? `inset 0 0 0 1px ${theme.ui.colors.primary.value}, inset  0 0 0 2px ${theme.ui.fill["2"].value}`
				: `inset 0 0 0 1px ${theme.ui.colors.primary.value}`};
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
			height: ${pxToRem(theme.space.xs.value)};
			margin-top: calc(${pxToRem(theme.space.xs.value)} / -2);
			background: ${isSelected ? theme.ui.colors.primary.value : theme.ui.outline["1"].value};
		}
	`};
`;

export const MultiButton: React.FC<MultiButtonProps> = ({ className, children, ...props }) => {
	return (
		<StyledMultiButton {...props} className={className}>
			{children}
		</StyledMultiButton>
	);
};

const users3 = pick<User>(users, 3);
const users4 = pick<User>(users, 4);
const users5 = pick<User>(users, 5);

const Home = () => {
	return (
		<>
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
				<Avatars people={users3} />
				<br />
				<Avatars people={users4} />

				<br />
				<br />
				<Avatars people={users5} />

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
				<br />
				<br />
				<RangeKnobField label="Rotation" max={360} id="rotation-0" suffix="°" />
				<br />
				<br />
				<RangeKnobField label="Rotation" max={360} step={45} id="rotation-1" suffix="°" />
				<br />
				<br />
				<RangeField label="Opacity" min={0} max={100} id="opacity-0" suffix="%" />
				<br />
				<br />
				<RangeField label="Opacity" min={0} max={1} step={0.1} id="opacity-1" />
				<br />
				<br />
			</div>
		</>
	);
};

export default Home;
