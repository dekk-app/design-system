import React from "react";

export interface SelectOption {
	label: React.ReactNode;
	value: string;
}

export interface SelectProps<T extends SelectOption = SelectOption> {
	flex?: boolean;
	fullWidth?: boolean;
	width?: string;
	defaultValue?: T;
}
