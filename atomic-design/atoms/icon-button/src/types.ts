import { IconName, IconSize } from "@dekk-ui/icons";
import React from "react";

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
	icon: IconName;
	size?: IconSize;
}
