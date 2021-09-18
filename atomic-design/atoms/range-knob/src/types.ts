import { InputHTMLAttributes } from "react";
import { Except } from "type-fest";

export interface RangeKnobProps
	extends Except<InputHTMLAttributes<HTMLInputElement>, "ref" | "as" | "onChange"> {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	defaultValue?: number;
	onChange?(value: number): void;
}

export interface StyledInputWrapperProps {
	isDisabled?: boolean;
}
