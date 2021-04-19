import { getDeg } from "@dekk-ui/utils";
import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { StyledBubble, StyledInputWrapper, StyledRing } from "./styled";
import { RangeKnobProps } from "./types";

export const RangeKnob = forwardRef<HTMLInputElement, RangeKnobProps>(
	({ id, onChange, value, min, max, tabIndex }, inputRef) => {
		const ref = useRef<HTMLDivElement>(null);
		const [down, setDown] = useState(false);
		const [rect, setRect] = useState({ left: 0, top: 0, width: 0 });

		const handleStart = useCallback(
			({ pageX, pageY }) => {
				if (ref.current) {
					const { left, top, width } = ref.current.getBoundingClientRect();
					const x = pageX - left;
					const y = pageY - top;
					const deg_ = Math.round(getDeg({ x, y }, width / 2));
					setRect({ top, left, width });
					setDown(true);
					if (onChange) {
						onChange(deg_);
					}
				}
			},
			[onChange, ref]
		);

		useEffect(() => {
			const subscribe = () => {
				const handleMove = ({ pageX, pageY }) => {
					if (down) {
						const x = pageX - rect.left;
						const y = pageY - rect.top;
						const deg_ = Math.round(getDeg({ x, y }, rect.width / 2));
						if (onChange) {
							onChange(deg_);
						}
					}
				};

				const handleEnd = () => {
					setDown(false);
				};

				document.addEventListener("mousemove", handleMove, { passive: true });
				document.addEventListener("mouseup", handleEnd);
				return () => {
					document.removeEventListener("mousemove", handleMove);
					document.removeEventListener("mouseup", handleEnd);
				};
			};

			return subscribe();
		}, [onChange, rect, down]);

		const handleChange = useCallback(
			(event_: React.ChangeEvent<HTMLInputElement>) => {
				if (onChange) {
					onChange(Math.round(Number.parseFloat(event_.target.value)));
				}
			},
			[onChange]
		);

		return (
			<StyledInputWrapper ref={ref} onMouseDown={handleStart}>
				<StyledRing
					style={{
						transform: `rotate3d(0,0,1,${value}deg)`,
					}}
				>
					<StyledBubble
						ref={inputRef}
						id={id}
						type="range"
						value={value}
						min={min}
						max={max}
						tabIndex={tabIndex}
						onChange={handleChange}
					/>
				</StyledRing>
			</StyledInputWrapper>
		);
	}
);
