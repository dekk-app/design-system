import React from "react";

export interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
	fullWidth?: boolean;
}

export interface InputLabelProps extends LabelProps {}
