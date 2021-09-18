import { Icon } from "@dekk-ui/icon";
import { IconSize } from "@dekk-ui/icons";
import React, { forwardRef, LegacyRef } from "react";
import ReactSelect, { Props } from "react-select";
import {
	StyledControl,
	StyledIndicatorsContainer,
	StyledInput,
	StyledMenu,
	StyledOption,
	StyledPlaceholder,
	StyledSelect,
	StyledSingleValue,
	StyledValueContainer,
} from "../styled";
import { SelectOption, SelectProps } from "../types";

export const customComponents: Props["components"] = {
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
		return <StyledValueContainer {...rest} />;
	},
	Placeholder: ({ children }) => {
		return <StyledPlaceholder>{children}</StyledPlaceholder>;
	},
	Input: props => {
		const { getStyles, cx, theme, innerRef, ...rest } = props;
		return <StyledInput ref={innerRef as LegacyRef<any>} {...rest} />;
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

export const Select = forwardRef<HTMLSelectElement, SelectProps & Props<SelectOption>>(
	({ id, disabled, width, fullWidth, placeholder, flex, ...props }, ref) => {
		return (
			<StyledSelect width={width} fullWidth={fullWidth} flex={flex} isDisabled={disabled}>
				<ReactSelect
					{...props}
					id={id && `__${id}__`}
					isDisabled={disabled}
					inputId={id}
					controlRef={ref}
					placeholder={placeholder || ""}
					isSearchable={false}
					components={customComponents}
				/>
			</StyledSelect>
		);
	}
);
