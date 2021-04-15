import React from "react";

type CSSize =
	| `${number}%`
	| `${number}px`
	| `${number}em`
	| `${number}ex`
	| `${number}lh`
	| `${number}rem`
	| `${number}vh`
	| `${number}vw`
	| `${number}vmin`
	| `${number}vmax`;

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
	fullWidth?: boolean;
	width?: CSSize;
}

export interface ColorInputProps extends InputProps {}

export interface TextInputProps extends InputProps {}

export interface NumberInputProps extends InputProps {}
