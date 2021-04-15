import React, { useCallback, useState } from "react";
import { StyledColorInput, StyledCombinedInput, StyledInput } from "./styled";
import { ColorInputProps } from "./types";

export const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>(
	({ defaultValue, width, fullWidth }, ref) => {
		const [value, setValue] = useState(defaultValue);
		const [valid, setValid] = useState<boolean | undefined>();

		const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
			({ target }) => {
				setValid(target.validity.valid);
				if (target.value.length > 1 && target.value.startsWith("#")) {
					setValue(target.value);
				} else if (target.value === "#") {
					setValid(undefined);
					setValue("");
				} else if (target.value.length < 1) {
					setValue(target.value);
				} else {
					setValue(`#${target.value}`);
				}
			},
			[]
		);
		return (
			<StyledCombinedInput invalid={valid === false}>
				<StyledInput
					fullWidth={fullWidth}
					width={width}
					value={value}
					onChange={handleChange}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
					pattern="^#[a-f0-9]{6}"
				/>
				<StyledColorInput ref={ref} value={value} type="color" onChange={handleChange} />
			</StyledCombinedInput>
		);
	}
);
