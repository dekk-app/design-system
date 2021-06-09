import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { StyledInputWrapper, StyledProgress, StyledRange } from "./styled";
import { RangeProps } from "./types";

export const Range = forwardRef<HTMLInputElement, RangeProps>(
	(
		{
			id,
			fullWidth,
			width,
			onChange,
			value: controlledValue,
			defaultValue,
			step = 1,
			min = 0,
			max = 100,
			tabIndex,
		},
		ref
	) => {
		const [value, setValue] = useState(defaultValue);
		const handleChange = useCallback(
			(event_: React.ChangeEvent<HTMLInputElement>) => {
				const newValue = Number.parseFloat(event_.target.value);
				setValue(newValue);
				if (onChange) {
					onChange(newValue);
				}
			},
			[onChange]
		);
		const style = useMemo(
			() => ({
				transform: `scale3d(${((controlledValue ?? value) - min) / (max - min)}, 1, 1)`,
			}),
			[min, max, controlledValue, value]
		);
		return (
			<StyledInputWrapper fullWidth={fullWidth} width={width}>
				<StyledProgress style={style} />
				<StyledRange
					ref={ref}
					id={id}
					type="range"
					value={controlledValue ?? value}
					step={step}
					min={min}
					max={max}
					tabIndex={tabIndex}
					onChange={handleChange}
				/>
			</StyledInputWrapper>
		);
	}
);

Range.defaultProps = {
	defaultValue: 0,
};
