import { NumberInputProps, TextInputProps } from "@dekk-ui/input-field";
import { HTMLProps } from "react";

export interface CombinedInputAdditionalProps {
	startAdornment?: string;
	endAdornment?: string;
	invalid?: boolean;
}
export interface CombinedTextInputProps extends TextInputProps, CombinedInputAdditionalProps {}

export interface CombinedNumberInputProps extends NumberInputProps, CombinedInputAdditionalProps {}

export type CombinedInputProps = CombinedTextInputProps | CombinedNumberInputProps;

export interface PrefixProps extends HTMLProps<HTMLDivElement> {
	width?: string;
}

export interface StyledCombinedInputProps {
	isDisabled?: boolean;
	fullWidth?: boolean;
	isInvalid?: boolean;
	width?: string;
}
