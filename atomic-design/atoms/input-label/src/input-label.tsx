import React, { forwardRef } from "react";
import { StyledLabel } from "./styled";
import { InputLabelProps } from "./types";

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
	({ children, fullWidth, htmlFor, className }, ref) => {
		return (
			<StyledLabel ref={ref} htmlFor={htmlFor} className={className} fullWidth={fullWidth}>
				{children}
			</StyledLabel>
		);
	}
);
