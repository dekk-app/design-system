import React, { forwardRef, useCallback, useState } from "react";
import { StyledCheckbox, StyledCheckboxWrapper, StyledPath, StyledSvg } from "./styled";
import { CheckboxProps } from "./types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, checked: controlledChecked, indeterminate, onChange, style, ...props }, ref) => {
		const [checked, setChecked] = useState(!!controlledChecked);
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
			event_ => {
				const checked = event_.target.checked;
				setChecked(checked);
				onChange?.(checked);
			},
			[onChange]
		);
		const display = flag => (flag ? "block" : "none");

		// TODO: Set `indeterminate` property on Input-DOM-Element

		return (
			<StyledCheckboxWrapper style={style}>
				<StyledCheckbox
					{...props}
					ref={ref}
					type="checkbox"
					checked={checked}
					onChange={handleChange}
				/>
				<StyledSvg
					hasBackground={checked || indeterminate}
					width="100%"
					height="100%"
					viewBox="0 0 16 16"
				>
					<StyledPath
						d="m3.75 8.5 2.5 2.5 6-6"
						display={display(checked && !indeterminate)}
					/>
					<StyledPath d="M4 8h8" display={display(indeterminate)} />
				</StyledSvg>
			</StyledCheckboxWrapper>
		);
	}
);
