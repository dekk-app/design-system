import { StyledCombinedInput, StyledInput } from "@dekk-ui/input-field/styled";
import React, {
	ChangeEventHandler,
	FocusEventHandler,
	forwardRef,
	KeyboardEventHandler,
	useCallback,
	useState,
} from "react";
import { StyledColorInput } from "./styled";
import { ColorInputProps } from "./types";

const hexKeys = new Set([
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
]);

const modKeys = new Set(["Backspace", "Tab", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"]);
const copyAndPasteKeys = new Set(["KeyC", "KeyV", "KeyX"]);
function getSelectionText() {
	const activeElement: HTMLInputElement | Element | null = document.activeElement;
	if (activeElement.tagName === "INPUT") {
		const { type, value, selectionStart, selectionEnd } = activeElement as HTMLInputElement;
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

		const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target }) => {
			setValid(target.validity.valid);
			if (target.value.length > 7 && target.value.startsWith("#")) {
				setValid(true);
				setValue(target.value.slice(0, 7));
			} else if (target.value.length > 1 && target.value.startsWith("#")) {
				setValue(target.value);
			} else if (target.value === "#") {
				setValid(null);
				setValue("");
			} else if (target.value.length === 0) {
				setValue(target.value);
			} else {
				setValue(`#${target.value.slice(0, 6)}`);
			}
		}, []);

		const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(event_ => {
			const selectionText = getSelectionText();
			if (
				!hexKeys.has(event_.code) &&
				!modKeys.has(event_.code) &&
				!(event_.metaKey && copyAndPasteKeys.has(event_.code))
			) {
				event_.preventDefault();
			} else if (
				!modKeys.has(event_.code) &&
				((event_.currentTarget.value.length > 6 && selectionText.length === 0) ||
					selectionText.includes("#"))
			) {
				event_.preventDefault();
			}
		}, []);

		const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(({ target }) => {
			if (target.value.length === 4 && target.value.startsWith("#")) {
				const [, _1, _2, _3] = target.value.split("");
				setValid(true);
				setValue(`#${_1}${_1}${_2}${_2}${_3}${_3}`);
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
					onBlur={handleBlur}
				/>
				<StyledColorInput ref={ref} value={value} type="color" onChange={handleChange} />
			</StyledCombinedInput>
		);
	}
);
