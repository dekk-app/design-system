import { CombinedInputProps } from "@dekk-ui/combined-input-field";
import {
	StyledCombinedInput,
	StyledPrefix,
	StyledSuffix,
} from "@dekk-ui/combined-input-field/styled";
import { FieldsetRow } from "@dekk-ui/fieldset-row";
import { NumberInput } from "@dekk-ui/input-field/number-input";
import { InputLabel } from "@dekk-ui/input-label";
import { RangeKnob } from "@dekk-ui/range-knob";
import { clamp } from "@dekk-ui/utils/clamp";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { useTheme } from "@emotion/react";
import React, { forwardRef, useCallback, useState } from "react";
import { RangeKnobFieldProps } from "./types";

export const RangeKnobField = forwardRef<
	HTMLInputElement,
	RangeKnobFieldProps & CombinedInputProps
>(({ id, label, name, max = 100, min = 0, step = 1, startAdornment, endAdornment }, ref) => {
	const [value, setValue] = useState(min);
	const theme = useTheme();
	const handleChange = useCallback(
		(newValue: number) => {
			setValue(
				newValue <= min
					? clamp((newValue + max) % max, max, min)
					: clamp(newValue % max, max, min)
			);
		},
		[max, min]
	);
	return (
		<FieldsetRow fullWidth columns={`1fr ${pxToRem(36)} 1fr`} gap={pxToRem(theme.space.xs)}>
			<InputLabel htmlFor={id} id={`${id}__label`}>
				{label}
			</InputLabel>
			<RangeKnob
				id={`__${id}__`}
				aria-labelledby={`${id}__label`}
				value={value}
				step={step}
				min={min}
				max={max}
				tabIndex={-1}
				onChange={handleChange}
			/>
			<StyledCombinedInput width={pxToRem(72)}>
				{startAdornment && <StyledPrefix>{startAdornment}</StyledPrefix>}
				<NumberInput
					ref={ref}
					fullWidth
					id={id}
					name={name}
					value={`${value}`}
					step={step}
					max={max}
					textAlign="right"
					onChange={handleChange}
				/>
				{endAdornment && <StyledSuffix>{endAdornment}</StyledSuffix>}
			</StyledCombinedInput>
		</FieldsetRow>
	);
});
