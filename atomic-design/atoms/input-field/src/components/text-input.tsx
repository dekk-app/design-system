import React, { forwardRef } from "react";
import { StyledInput } from "../styled";
import { TextInputProps } from "../types";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	return (
		<StyledInput
			{...props}
			ref={ref}
			type="text"
			autoComplete="off"
			autoCorrect="off"
			autoCapitalize="off"
			spellCheck="false"
		/>
	);
});
