import React, { forwardRef } from "react";
import { StyledLabel } from "./styled";
import { InputLabelProps } from "./types";

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
	({ children, fullWidth, ...props }, ref) => {
		return (
			<StyledLabel {...props} ref={ref} fullWidth={fullWidth}>
				{children}
			</StyledLabel>
		);
	}
);
