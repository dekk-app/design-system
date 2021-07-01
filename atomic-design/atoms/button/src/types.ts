import React from "react";
import { IconName, IconSize } from "@dekk-ui/icons";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
}

export interface IconButtonProps extends ButtonProps {
	icon: IconName;
	size?: IconSize;
}
