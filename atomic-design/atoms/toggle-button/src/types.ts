import { HTMLAttributes } from "react";

export interface ToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
}
