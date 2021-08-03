import { HTMLProps } from "react";
import { Except } from "type-fest";

export interface InputProps extends Except<HTMLProps<HTMLInputElement>, "ref" | "as"> {
	fullWidth?: boolean;
	width?: string;
	textAlign?: "left" | "right" | "center";
}

export interface PrefixProps extends HTMLProps<HTMLDivElement> {
	width?: string;
}

export interface CombinedInputProps extends HTMLProps<HTMLSpanElement> {
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
