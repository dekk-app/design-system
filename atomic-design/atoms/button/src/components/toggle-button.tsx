import React, { FC } from "react";
import { StyledToggleButton } from "../styled";
import { ButtonProps } from "../types";

export const ToggleButton: FC<ButtonProps> = ({ children, ...props }) => {
	return <StyledToggleButton {...props}>{children}</StyledToggleButton>;
};
