import React, { ChangeEventHandler, forwardRef, useCallback, useState } from "react";
import { StyledCheckbox, StyledCheckboxWrapper, StyledPath, StyledSvg } from "./styled";
import { CheckboxProps } from "./types";
import { display } from "./utils";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, checked: controlledChecked, indeterminate, onChange, style, ...props }, ref) => {
		const [isChecked, setIsChecked] = useState(!!controlledChecked);
		const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
			event_ => {
				const { checked } = event_.target;
				setIsChecked(checked);
				onChange?.(checked);
			},
			[onChange]
		);

		// TODO: Set `indeterminate` property on Input-DOM-Element

		return (
			<StyledCheckboxWrapper className={className} style={style}>
				<StyledCheckbox
					{...props}
					ref={ref}
					type="checkbox"
					checked={isChecked}
					onChange={handleChange}
				/>
				<StyledSvg
					hasBackground={isChecked || indeterminate}
					width="100%"
					height="100%"
					viewBox="0 0 16 16"
				>
					<StyledPath
						d="m3.75 8.5 2.5 2.5 6-6"
						display={display(isChecked && !indeterminate)}
					/>
					<StyledPath d="M4 8h8" display={display(indeterminate)} />
				</StyledSvg>
			</StyledCheckboxWrapper>
		);
	}
);
