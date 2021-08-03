import { InputProps } from "@dekk-ui/input-field";
import { Except } from "type-fest";
export interface RangeProps extends Except<InputProps, "onChange" | "min" | "max" | "step" | "value" | "defaultValue"> {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    width?: string;
    fullWidth?: boolean;
    onChange?(value: number): void;
}
