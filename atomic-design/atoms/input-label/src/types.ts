import React from "react";
import { Except } from "type-fest";

export interface LabelProps extends Except<React.HTMLProps<HTMLLabelElement>, "ref"> {
	fullWidth?: boolean;
}

export interface InputLabelProps extends LabelProps {}
