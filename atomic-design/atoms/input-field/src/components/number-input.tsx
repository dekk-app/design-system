import React, { forwardRef, useCallback } from "react";
import { StyledNumberInput } from "../styled";
import { NumberInputProps } from "../types";

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	({ onChange, ...props }, ref) => {
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
			event_ => {
				if (onChange) {
					onChange(Number.parseFloat(event_.target.value));
				}
			},
			[onChange]
		);
		return <StyledNumberInput {...props} ref={ref} type="number" onChange={handleChange} />;
	}
);
