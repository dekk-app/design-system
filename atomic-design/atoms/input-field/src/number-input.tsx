import React, { forwardRef, useCallback } from "react";
import { StyledNumberInput } from "./styled";
import { NumberInputProps } from "./types";

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	({ value, width, fullWidth, onChange, min, max }, ref) => {
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
			event_ => {
				if (onChange) {
					onChange(Math.round(Number.parseFloat(event_.target.value)));
				}
			},
			[onChange]
		);

		return (
			<StyledNumberInput
				ref={ref}
				value={value}
				type="number"
				fullWidth={fullWidth}
				width={width}
				min={min}
				max={max}
				onChange={handleChange}
			/>
		);
	}
);
