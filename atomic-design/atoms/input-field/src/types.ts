import React from "react";
import { Except } from "type-fest";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
	fullWidth?: boolean;
	width?: string;
	textAlign?: "left" | "right" | "center";
}

export interface PrefixProps extends React.HTMLProps<HTMLDivElement> {
	width?: string;
}

export interface CombinedInputProps extends React.HTMLProps<HTMLSpanElement> {
	invalid?: boolean;
	fullWidth?: boolean;
	width?: string;
}

export interface TextInputProps extends InputProps {}

export interface NumberInputProps extends Except<InputProps, "onChange" | "min" | "max"> {
	min?: number;
	max?: number;
	onChange?(value: number): void;
}
