import { HTMLProps } from "react";
import { Except } from "type-fest";

export interface CheckboxProps
	extends Except<HTMLProps<HTMLInputElement>, "ref" | "as" | "onChange"> {
	indeterminate?: boolean;
	onChange?(value: boolean): void;
}
