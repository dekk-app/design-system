import { StyledCombinedInput, StyledInput } from "@dekk-ui/input-field";
import React, { forwardRef, useCallback, useState } from "react";
import { StyledColorInput } from "./styled";
import { ColorInputProps } from "./types";

const hexKeys = [
	"Digit1",
	"Digit2",
	"Digit3",
	"Digit4",
	"Digit5",
	"Digit6",
	"Digit7",
	"Digit8",
	"Digit9",
	"Digit0",
	"KeyA",
	"KeyB",
	"KeyC",
	"KeyD",
	"KeyE",
	"KeyF",
];

const modKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
function getSelectionText() {
	let activeEl: HTMLInputElement | Element | null = document.activeElement;
	if (activeEl.tagName === "INPUT") {
		const { type, value, selectionStart, selectionEnd } = activeEl as HTMLInputElement;
		const match = /^(?:text|search|password|tel|url)$/i.exec(type);
		const hasStart = typeof selectionStart === "number";
		if (match && hasStart) {
			return value.slice(selectionStart, selectionEnd);
		}
	} else if (window.getSelection) {
		return window.getSelection().toString();
	}
	return "";
}
export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
	({ defaultValue, width, fullWidth }, ref) => {
		const [value, setValue] = useState(defaultValue);
		const [valid, setValid] = useState<boolean | null>(null);

		const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
			({ target }) => {
				setValid(target.validity.valid);
				if (target.value.length > 1 && target.value.startsWith("#")) {
					setValue(target.value);
				} else if (target.value === "#") {
					setValid(null);
					setValue("");
				} else if (target.value.length === 0) {
					setValue(target.value);
				} else {
					setValue(`#${target.value}`);
				}
			},
			[]
		);

		const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback(event_ => {
			const selectionText = getSelectionText();
			if (!hexKeys.includes(event_.code) && !modKeys.includes(event_.code)) {
				event_.preventDefault();
			} else if (
				!modKeys.includes(event_.code) &&
				((event_.currentTarget.value.length > 6 && selectionText.length === 0) ||
					selectionText.includes("#"))
			) {
				event_.preventDefault();
			}
		}, []);

		return (
			<StyledCombinedInput
				invalid={valid === null ? undefined : !valid}
				fullWidth={fullWidth}
				width={width}
			>
				<StyledInput
					value={value}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
					pattern="^#[a-f0-9]{6}"
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				<StyledColorInput ref={ref} value={value} type="color" onChange={handleChange} />
			</StyledCombinedInput>
		);
	}
);
