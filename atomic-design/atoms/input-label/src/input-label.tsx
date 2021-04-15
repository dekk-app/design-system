import React from "react";
import { StyledLabel } from "./styled";
import { InputLabelProps } from "./types";

export const InputLabel = React.forwardRef<HTMLInputElement, InputLabelProps>(
	({ children }, ref) => {
		return <StyledLabel ref={ref}>{children}</StyledLabel>;
	}
);
