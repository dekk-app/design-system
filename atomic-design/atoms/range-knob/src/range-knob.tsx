import { clamp } from "@dekk-ui/utils/clamp";
import { getDeg } from "@dekk-ui/utils/get-deg";
import React, { ChangeEvent, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { StyledBubble, StyledInputWrapper, StyledRange, StyledRing } from "./styled";
import { RangeKnobProps } from "./types";

export const RangeKnob = forwardRef<HTMLInputElement, RangeKnobProps>(
	(
		{
			onChange,
			defaultValue = 0,
			value: controlledValue,
			min = 0,
			max = 100,
			step = 1,
			disabled,
			...props
		},
		inputRef
	) => {
		const ref = useRef<HTMLDivElement>(null);
		const [value, setValue] = useState(defaultValue);
		const [down, setDown] = useState(false);
		const [rect, setRect] = useState({ left: 0, top: 0, width: 0 });
		const range = max - min;

		const handleStart = useCallback(
			({ pageX, pageY }) => {
				if (ref.current) {
					const { left, top, width } = ref.current.getBoundingClientRect();
					const x = pageX - window.scrollX - left;
					const y = pageY - window.scrollY - top;
					const newValue =
						Math.round(((getDeg({ x, y }, width / 2) / 360) * range + min) / step) *
						step;
					setRect({ top, left, width });
					setDown(true);
					setValue(newValue);
					if (onChange) {
						onChange(newValue);
					}
				}
			},
			[onChange, ref, range, min, step]
		);

		const handleMove = useCallback(
			({ pageX, pageY }) => {
				if (down) {
					const x = pageX - window.scrollX - rect.left;
					const y = pageY - window.scrollY - rect.top;
					const newValue =
						Math.round(
							((getDeg({ x, y }, rect.width / 2) / 360) * range + min) / step
						) * step;
					setValue(newValue);
					if (onChange) {
						onChange(newValue);
					}
				}
			},
			[onChange, down, rect, range, min, step]
		);

		const handleEnd = useCallback(() => {
			setDown(false);
		}, []);

		useEffect(() => {
			const subscribe = () => {
				document.addEventListener("mousemove", handleMove, { passive: true });
				document.addEventListener("mouseup", handleEnd);
				return () => {
					document.removeEventListener("mousemove", handleMove);
					document.removeEventListener("mouseup", handleEnd);
				};
			};

			return subscribe();
		}, [handleMove, handleEnd]);

		const handleChange = useCallback(
			(event_: ChangeEvent<HTMLInputElement>) => {
				const newValue = Number.parseFloat(event_.target.value);
				const moduloValue =
					newValue <= min
						? ((newValue + range) % range) + min
						: clamp((newValue % range) + min, max, min);
				setValue(moduloValue);
				if (onChange) {
					onChange(moduloValue);
				}
			},
			[onChange, min, max, range]
		);

		return (
			<StyledInputWrapper ref={ref} isDisabled={disabled} onMouseDown={handleStart}>
				<StyledRange
					{...props}
					ref={inputRef}
					type="range"
					disabled={disabled}
					value={controlledValue ?? value}
					max={max}
					min={min - step}
					step={step}
					onChange={handleChange}
				/>
				<StyledRing
					style={{
						transform: `rotate3d(0,0,1,${Math.round(
							(controlledValue ?? value) * (360 / range)
						)}deg)`,
					}}
				>
					<StyledBubble />
				</StyledRing>
			</StyledInputWrapper>
		);
	}
);
