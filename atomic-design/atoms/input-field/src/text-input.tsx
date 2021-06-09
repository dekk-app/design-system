import React, { forwardRef } from "react";
import { StyledInput } from "./styled";
import { TextInputProps } from "./types";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	({ value, textAlign, width, fullWidth, id }, ref) => {
		return (
			<StyledInput
				ref={ref}
				value={value}
				id={id}
				type="text"
				textAlign={textAlign}
				fullWidth={fullWidth}
				width={width}
				autoComplete="off"
				autoCorrect="off"
				autoCapitalize="off"
				spellCheck="false"
			/>
		);
	}
);
