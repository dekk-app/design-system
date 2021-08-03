import { HTMLProps } from "react";
import { Except } from "type-fest";
export interface LabelProps extends Except<HTMLProps<HTMLLabelElement>, "ref"> {
    fullWidth?: boolean;
}
export interface InputLabelProps extends LabelProps {
}
