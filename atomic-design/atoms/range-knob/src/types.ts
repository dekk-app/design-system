import { InputProps } from "@dekk-ui/input-field";
import { Except } from "type-fest";

export interface RangeKnobProps extends Except<InputProps, "onChange" | "min" | "max" | "value"> {
	min: number;
	max: number;
	value: number;
	onChange?(value: number): void;
}
