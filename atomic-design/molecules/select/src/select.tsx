import { Icon } from "@dekk-ui/icon";
import { IconSize } from "@dekk-ui/icons";
import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react";
import ReactSelect, { Props } from "react-select";
import { StyledSelect } from "./styled";
import { SelectOption, SelectProps } from "./types";

const StyledMenu = styled.div`
	position: absolute;
	z-index: 1;
	top: calc(100% + ${pxToRem(8)});
	right: ${pxToRem(-8)};
	left: ${pxToRem(-8)};
	padding: ${pxToRem(12)} ${pxToRem(8)};
	${({ theme }) => css`
		box-shadow: inset 0 0 0 1px ${theme.ui.outline[1].value},
			0 ${pxToRem(30)} ${pxToRem(27)} rgba(0, 0, 0, 0.09);
		border-radius: ${pxToRem(theme.radius.s.value)};
		background: ${theme.ui.background[1].value};
		color: ${theme.ui.text[1].value};
	`};
`;

const StyledPopoutMenu = styled.div``;

const StyledSingleValue = styled.div`
	background: none;
	color: inherit;
`;

const StyledInput = styled.input<ReactSelectProps>`
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

const StyledIndicatorsContainer = styled.div<ReactSelectProps>`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	${({ theme }) => css`
		width: ${pxToRem(theme.space.m.value)};
		height: ${pxToRem(theme.space.m.value)};
		margin: ${pxToRem(theme.space.xxs.value)};
		color: ${theme.ui.fill[4].value};
	`};
`;

export interface ReactSelectProps {
	isSelected?: boolean;
	isFocused?: boolean;
	isDisabled?: boolean;
	menuIsOpen?: boolean;
	hasValue?: boolean;
}

const StyledOption = styled.div<ReactSelectProps>`
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
		border-radius: ${pxToRem(theme.radius.s.value)};
		background: ${isSelected
			? theme.ui.fill[2].value
			: isFocused
			? theme.ui.fill[1].value
			: "none"};
		color: ${theme.ui.text[1].value};
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
		min-width: ${pxToRem(theme.space.l.value)};
		height: ${pxToRem(theme.space.l.value)};
		line-height: ${pxToRem(theme.space.s.value)};
		border-radius: ${pxToRem(theme.radius.s.value)};
		background: ${isFocused ? theme.ui.fill["1"].value : theme.ui.fill["2"].value};
		color: ${theme.ui.text["1"].value};
		box-shadow: inset 0 0 0 1px
			${isFocused ? theme.ui.colors.primary.value : theme.ui.outline["1"].value};
		caret-color: ${theme.ui.colors.primary.value};

		&:hover {
			background: ${theme.ui.fill["1"].value};
		}
		&:focus {
			background: ${theme.ui.fill["1"].value};
			box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary.value};
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
		min-width: ${pxToRem(theme.space.l.value)};
		margin: 0 ${pxToRem(theme.space.xs.value)} ${pxToRem(theme.space.xs.value)};
		padding-bottom: ${pxToRem(theme.space.xs.value)};
		line-height: ${pxToRem(20)};
		background: ${theme.ui.background["1"].value};
		color: ${theme.ui.text["1"].value};
		box-shadow: inset 0 -1px 0 ${isFocused ? theme.ui.colors.primary.value : theme.ui.outline["1"].value};
		caret-color: ${theme.ui.colors.primary.value};
	`};
`;

const StyledValueContainer = styled.div`
	display: flex;
	position: relative;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: flex-start;
	padding: ${pxToRem(2)} ${pxToRem(8)};
`;

const StyledPopoutValueContainer = styled.div`
	display: flex;
	position: relative;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: flex-start;
	padding: ${pxToRem(2)} 0;
`;

const StyledBlanket = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const StyledPlaceholder = styled.div`
	position: absolute;
	top: 50%;
	padding: 0 ${pxToRem(2)};
	transform: translateY(-50%);
	color: hsl(0, 0%, 50%);
`;

const PopoutContext = createContext({
	open() {
		/**/
	},
	close() {
		/**/
	},
	toggle() {
		/**/
	},
});
const usePopoutContext = () => useContext(PopoutContext);

const customComponents = {
	ValueContainer: props => {
		const {
			selectProps,
			setValue,
			getStyles,
			getValue,
			clearValue,
			cx,
			options,
			theme,
			innerRef,
			...rest
		} = props;
		return <StyledValueContainer ref={innerRef} {...rest} />;
	},
	Input: props => {
		const {
			selectProps,
			setValue,
			getStyles,
			getValue,
			clearValue,
			cx,
			options,
			theme,
			innerRef,
			...rest
		} = props;
		return <StyledInput ref={innerRef} {...rest} />;
	},
	IndicatorsContainer: () => (
		<StyledIndicatorsContainer>
			<Icon size={IconSize.s} icon="chevronDown" />
		</StyledIndicatorsContainer>
	),
	IndicatorSeparator: null,
	Control: ({ innerProps, innerRef, children, isFocused }) => (
		<StyledControl {...innerProps} ref={innerRef} isFocused={isFocused}>
			{children}
		</StyledControl>
	),
	Menu: ({ innerProps, innerRef, children }) => (
		<StyledMenu {...innerProps} ref={innerRef}>
			{children}
		</StyledMenu>
	),
	Option: ({ innerProps, innerRef, children, isFocused, isSelected, isDisabled }) => (
		<StyledOption
			{...innerProps}
			ref={innerRef}
			isFocused={isFocused}
			isSelected={isSelected}
			isDisabled={isDisabled}
		>
			{children}
		</StyledOption>
	),
	SingleValue: ({ innerProps, children }) => (
		<StyledSingleValue {...innerProps}>{children}</StyledSingleValue>
	),
};

const popoutComponents = {
	...customComponents,
	Menu: ({ innerProps, innerRef, children }) => (
		<StyledPopoutMenu {...innerProps} ref={innerRef}>
			{children}
		</StyledPopoutMenu>
	),
	IndicatorsContainer: () => null,
	Control: ({ innerProps, innerRef, children, isFocused }) => (
		<StyledPopoutControl {...innerProps} ref={innerRef} isFocused={isFocused}>
			{children}
		</StyledPopoutControl>
	),
	Option: ({
		innerProps: { onClick, ...innerProps },
		innerRef,
		children,
		isFocused,
		isSelected,
		isDisabled,
	}) => {
		const { close } = usePopoutContext();
		const handleClick = useCallback(
			event_ => {
				onClick(event_);
				close();
			},
			[close, onClick]
		);

		return (
			<StyledOption
				{...innerProps}
				ref={innerRef}
				isFocused={isFocused}
				isSelected={isSelected}
				isDisabled={isDisabled}
				onClick={handleClick}
			>
				{children}
			</StyledOption>
		);
	},
	ValueContainer: props => {
		const {
			selectProps,
			setValue,
			getStyles,
			getValue,
			clearValue,
			cx,
			options,
			theme,
			innerRef,
			...rest
		} = props;
		return <StyledPopoutValueContainer ref={innerRef} {...rest} />;
	},
};

const styles = {};

export const PopoutSelect = forwardRef<HTMLSelectElement, SelectProps & Props<SelectOption>>(
	({ defaultValue, placeholder, width, fullWidth, flex, ...props }, ref) => {
		const [value, setValue] = useState<SelectOption>(defaultValue);
		const controlRef = useRef<HTMLDivElement>(null);
		const [open, setOpen] = useState(false);
		const handleChange = React.useCallback((newValue: SelectOption) => {
			setValue(newValue);
		}, []);
		const menu = useMemo(
			() => ({
				open() {
					setOpen(true);
				},
				close() {
					setOpen(false);
				},
				toggle() {
					setOpen(previousValue => !previousValue);
				},
			}),
			[]
		);
		const handleKeyDown = React.useCallback(
			event_ => {
				if (event_.code === "Enter") {
					setOpen(false);
					if (controlRef.current) {
						controlRef.current.focus();
					}
				} else if (event_.code === "Escape" || event_.code === "Tab") {
					event_.preventDefault();
					setOpen(false);
					if (controlRef.current) {
						controlRef.current.focus();
					}
				}
			},
			[controlRef]
		);
		const handleControlKeyDown = React.useCallback(event_ => {
			if (event_.code === "Space") {
				event_.preventDefault();
				setOpen(previousValue => !previousValue);
			} else if (event_.code === "ArrowDown" || event_.code === "ArrowUp") {
				event_.preventDefault();
				setOpen(true);
			}
		}, []);

		return (
			<PopoutContext.Provider value={menu}>
				<StyledSelect width={width} fullWidth={fullWidth} flex={flex}>
					<StyledControl
						ref={controlRef}
						tabIndex={0}
						onClick={menu.toggle}
						onKeyDown={handleControlKeyDown}
					>
						<StyledValueContainer>
							{value ? (
								<StyledSingleValue>{value.label}</StyledSingleValue>
							) : (
								<StyledPlaceholder>{placeholder}</StyledPlaceholder>
							)}
						</StyledValueContainer>
						<StyledIndicatorsContainer>
							<Icon size={IconSize.s} icon="chevronDown" />
						</StyledIndicatorsContainer>
					</StyledControl>
					{open && <StyledBlanket onClick={menu.close} />}
					{open && (
						<StyledMenu>
							<ReactSelect
								{...props}
								autoFocus
								menuIsOpen
								controlRef={ref}
								value={value}
								placeholder={placeholder || ""}
								components={popoutComponents}
								styles={styles}
								isClearable={false}
								backspaceRemovesValue={false}
								controlShouldRenderValue={false}
								hideSelectedOptions={false}
								tabSelectsValue={false}
								onChange={handleChange}
								onKeyDown={handleKeyDown}
							/>
						</StyledMenu>
					)}
				</StyledSelect>
			</PopoutContext.Provider>
		);
	}
);
export const Select = forwardRef<HTMLSelectElement, SelectProps & Props<SelectOption>>(
	({ id, width, fullWidth, placeholder, flex, ...props }, ref) => {
		return (
			<StyledSelect width={width} fullWidth={fullWidth} flex={flex}>
				<ReactSelect
					{...props}
					id={id && `__${id}__`}
					inputId={id}
					controlRef={ref}
					placeholder={placeholder || ""}
					isSearchable={false}
					components={customComponents}
					styles={styles}
				/>
			</StyledSelect>
		);
	}
);
