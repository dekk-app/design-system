import React, { forwardRef, useCallback } from "react";
import { StyledCheckbox } from "./styled";
import { CheckboxProps } from "./types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ onChange, ...props }, ref) => {
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
			event_ => {
				if (onChange) {
					onChange(event_.target.checked);
				}
			},
			[onChange]
		);
		return <StyledCheckbox {...props} ref={ref} type="checkbox" onChange={handleChange} />;
	}
);
