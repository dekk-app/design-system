import React, { FC } from "react";
import { StyledToggleButton } from "./styled";
import { ToggleButtonProps } from "./types";

export const ToggleButton: FC<ToggleButtonProps> = ({ className, children, ...props }) => {
	return (
		<StyledToggleButton {...props} className={className}>
			{children}
		</StyledToggleButton>
	);
};
