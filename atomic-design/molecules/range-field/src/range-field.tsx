import { FieldsetRow } from "@dekk-ui/fieldset-row";
import { NumberInput } from "@dekk-ui/input-field/number-input";
import { StyledCombinedInput, StyledPrefix, StyledSuffix } from "@dekk-ui/input-field/styled";
import { InputLabel } from "@dekk-ui/input-label";
import { Range } from "@dekk-ui/range";
import { clamp } from "@dekk-ui/utils/clamp";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { useTheme } from "@emotion/react";
import React, { forwardRef, useCallback, useState } from "react";
import { StyledInputWrapper, StyledRangeLabel } from "./styled";
import { RangeFieldProps } from "./types";

export const RangeField = forwardRef<
	HTMLInputElement,
	RangeFieldProps & { prefix?: string; suffix?: string }
>(({ id, label, name, max = 100, min = 0, step = 1, prefix, suffix }, ref) => {
	const [value, setValue] = useState(min);
	const theme = useTheme();
	const handleChange = useCallback(newValue => {
		setValue(clamp(newValue, max, min));
	}, []);
	return (
		<StyledInputWrapper>
			<InputLabel fullWidth htmlFor={id}>
				{label}
			</InputLabel>
			<FieldsetRow
				fullWidth
				columns={`auto ${pxToRem(theme.space.l * 2)}`}
				gap={pxToRem(theme.space.l)}
			>
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
					{prefix && <StyledPrefix>{prefix}</StyledPrefix>}
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
					{suffix && <StyledSuffix>{suffix}</StyledSuffix>}
				</StyledCombinedInput>
			</FieldsetRow>
		</StyledInputWrapper>
	);
});
