import { IconName, IconSize } from "@dekk-ui/icons";
import { HTMLAttributes } from "react";

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
	icon: IconName;
	size?: IconSize;
}
