import { HTMLProps } from "react";
import { Except } from "type-fest";

export interface RangeProps extends Except<HTMLProps<HTMLInputElement>, "ref" | "as" | "onChange"> {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	defaultValue?: number;
	width?: string;
	fullWidth?: boolean;
	onChange?(value: number): void;
}
