import { InputProps } from "@dekk-ui/input-field";
import { Except } from "type-fest";

export interface RangeKnobProps
	extends Except<InputProps, "onChange" | "min" | "step" | "max" | "value" | "defaultValue"> {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	defaultValue?: number;
	onChange?(value: number): void;
}
