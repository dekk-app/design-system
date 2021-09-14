import { InputHTMLAttributes } from "react";
import { Except } from "type-fest";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	fullWidth?: boolean;
	width?: string;
	invalid?: boolean;
	textAlign?: "left" | "right" | "center";
}

export interface TextInputProps extends InputProps {
	type?: "email" | "password" | "text";
}

export interface NumberInputProps extends Except<InputProps, "onChange" | "min" | "max" | "type"> {
	min?: number;
	max?: number;
	type?: "number";
	onChange?(value: number): void;
}
