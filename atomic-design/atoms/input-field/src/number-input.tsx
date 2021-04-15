import React, { forwardRef, useCallback, useState } from "react";
import { StyledInput } from "./styled";
import { NumberInputProps } from "./types";

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	({ value, width, fullWidth }, ref) => {
		const [step, setStep] = useState(1);

		const handleKeyDown: React.KeyboardEventHandler = useCallback(({ shiftKey }) => {
			if (shiftKey) {
				setStep(10);
			}
		}, []);

		const handleKeyUp: React.KeyboardEventHandler = useCallback(({ shiftKey }) => {
			if (!shiftKey) {
				setStep(1);
			}
		}, []);

		return (
			<StyledInput
				ref={ref}
				value={value}
				type="number"
				fullWidth={fullWidth}
				width={width}
				step={step}
				onKeyDown={handleKeyDown}
				onKeyUp={handleKeyUp}
			/>
		);
	}
);
