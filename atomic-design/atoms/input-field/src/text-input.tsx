import React from "react";
import { StyledInput } from "./styled";
import { TextInputProps } from "./types";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	({ value, width, fullWidth }, ref) => {
		return (
			<StyledInput
				ref={ref}
				value={value}
				type="text"
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
