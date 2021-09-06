import { ReactNode } from "react";

export interface SelectOption {
	label: ReactNode;
	value: string;
}

export interface SelectProps<T extends SelectOption = SelectOption> {
	flex?: boolean;
	fullWidth?: boolean;
	width?: string;
	defaultValue?: T;
	disabled?: boolean;
}

export interface StyledSelectProps<T extends SelectOption = SelectOption> {
	flex?: boolean;
	fullWidth?: boolean;
	width?: string;
	defaultValue?: T;
	isDisabled?: boolean;
}

export interface ReactSelectProps {
	isSelected?: boolean;
	isFocused?: boolean;
	isDisabled?: boolean;
	menuIsOpen?: boolean;
	hasValue?: boolean;
}
