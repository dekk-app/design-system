import React, { forwardRef } from "react";
import { Except } from "type-fest";
import { StyledLabel } from "./styled";
import { InputLabelProps } from "./types";

export const InputLabel = forwardRef<HTMLLabelElement, Except<InputLabelProps, "as">>(
	({ children, fullWidth, ...props }, ref) => {
		return (
			<StyledLabel {...props} ref={ref} fullWidth={fullWidth}>
				{children}
			</StyledLabel>
		);
	}
);
