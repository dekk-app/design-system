import React, { FC } from "react";
import { StyledButton } from "../styled";
import { ButtonProps } from "../types";

/*
TODO:
 - Paddings
 - Text alignment
 - Optional icon
 - Icon alignment
*/

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};
