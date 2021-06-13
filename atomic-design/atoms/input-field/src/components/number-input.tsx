import React, { forwardRef, useCallback } from "react";
import { StyledNumberInput } from "../styled";
import { NumberInputProps } from "../types";

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	({ value, id, name, textAlign, width, fullWidth, onChange, min, max, step }, ref) => {
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
			event_ => {
				if (onChange) {
					onChange(Number.parseFloat(event_.target.value));
				}
			},
			[onChange]
		);
		return (
			<StyledNumberInput
				ref={ref}
				value={value}
				id={id}
				name={name}
				textAlign={textAlign}
				type="number"
				fullWidth={fullWidth}
				width={width}
				step={step}
				min={min}
				max={max}
				onChange={handleChange}
			/>
		);
	}
);
