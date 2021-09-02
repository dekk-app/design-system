import { IconName, IconSize } from "@dekk-ui/icons";
import { ButtonHTMLAttributes } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
	icon: IconName;
	size?: IconSize;
}
