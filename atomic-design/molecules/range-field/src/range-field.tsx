import { CombinedInputProps } from "@dekk-ui/combined-input-field";
import {
	StyledCombinedInput,
	StyledPrefix,
	StyledSuffix,
} from "@dekk-ui/combined-input-field/styled";
import { FieldsetRow } from "@dekk-ui/fieldset-row";
import { NumberInput } from "@dekk-ui/input-field/number-input";
import { InputLabel } from "@dekk-ui/input-label";
import { Range } from "@dekk-ui/range";
import { clamp } from "@dekk-ui/utils/clamp";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { useTheme } from "@emotion/react";
import React, { forwardRef, useCallback, useState } from "react";
import { StyledInputWrapper, StyledRangeLabel } from "./styled";
import { RangeFieldProps } from "./types";

export const RangeField = forwardRef<HTMLInputElement, RangeFieldProps & CombinedInputProps>(
	({ id, label, name, max = 100, min = 0, step = 1, startAdornment, endAdornment }, ref) => {
		const [value, setValue] = useState(min);
		const theme = useTheme();
		const handleChange = useCallback(
			(newValue: number) => {
				setValue(clamp(newValue, max, min));
			},
			[max, min]
		);
		return (
			<StyledInputWrapper>
				<InputLabel fullWidth htmlFor={id}>
					{label}
				</InputLabel>
				<FieldsetRow fullWidth columns={`auto ${pxToRem(64)}`} gap={pxToRem(theme.space.l)}>
					<StyledRangeLabel>
						<Range
							fullWidth
							id={`__${id}__`}
							value={value}
							step={step}
							min={min}
							max={max}
							tabIndex={-1}
							onChange={handleChange}
						/>
					</StyledRangeLabel>
					<StyledCombinedInput fullWidth>
						{startAdornment && <StyledPrefix>{startAdornment}</StyledPrefix>}
						<NumberInput
							ref={ref}
							fullWidth
							id={id}
							name={name}
							value={`${value}`}
							step={step}
							min={min}
							max={max}
							textAlign="right"
							onChange={handleChange}
						/>
						{endAdornment && <StyledSuffix>{endAdornment}</StyledSuffix>}
					</StyledCombinedInput>
				</FieldsetRow>
			</StyledInputWrapper>
		);
	}
);
