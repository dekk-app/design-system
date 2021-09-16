import { NumberInput, TextInput } from "@dekk-ui/input-field";
import React, { forwardRef } from "react";
import { StyledCombinedInput, StyledPrefix, StyledSuffix } from "./styled";
import { CombinedInputProps } from "./types";

export const CombinedInput = forwardRef<HTMLInputElement, CombinedInputProps>(
	({ width, fullWidth, disabled, invalid, startAdornment, endAdornment, ...props }, ref) => {
		return (
			<StyledCombinedInput
				fullWidth={fullWidth}
				width={width}
				isDisabled={disabled}
				isInvalid={invalid}
			>
				{startAdornment && <StyledPrefix>{startAdornment}</StyledPrefix>}
				{props.type === "number" ? (
					<NumberInput ref={ref} disabled={disabled} invalid={invalid} {...props} />
				) : (
					<TextInput ref={ref} disabled={disabled} invalid={invalid} {...props} />
				)}
				{endAdornment && <StyledSuffix>{endAdornment}</StyledSuffix>}
			</StyledCombinedInput>
		);
	}
);
