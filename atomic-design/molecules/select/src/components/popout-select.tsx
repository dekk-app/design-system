import { Icon } from "@dekk-ui/icon";
import { IconSize } from "@dekk-ui/icons";
import React, {
	forwardRef,
	KeyboardEventHandler,
	MouseEventHandler,
	useCallback,
	useMemo,
	useRef,
	useState,
} from "react";
import ReactSelect, { Props } from "react-select";
import { PopoutContext, usePopoutContext } from "../context";
import {
	StyledBlanket,
	StyledControl,
	StyledIndicatorsContainer,
	StyledMenu,
	StyledOption,
	StyledPlaceholder,
	StyledPopoutControl,
	StyledPopoutMenu,
	StyledPopoutValueContainer,
	StyledSelect,
	StyledSingleValue,
	StyledValueContainer,
} from "../styled";
import { SelectOption, SelectProps } from "../types";
import { customComponents } from "./select";

export const popoutComponents: Props["components"] = {
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
		const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
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
			...rest
		} = props;
		return <StyledPopoutValueContainer {...rest} />;
	},
};
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
		const handleKeyDown: KeyboardEventHandler = React.useCallback(
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
		const handleControlKeyDown: KeyboardEventHandler = React.useCallback(event_ => {
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
