import { HTMLAttributes } from "react";
import { Except } from "type-fest";

export interface LabelProps extends Except<HTMLAttributes<HTMLLabelElement>, "ref" | "as"> {
	fullWidth?: boolean;
	htmlFor?: string;
}

export interface InputLabelProps extends LabelProps {}
