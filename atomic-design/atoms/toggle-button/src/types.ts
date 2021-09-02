import { ButtonHTMLAttributes } from "react";

export interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isSelected?: boolean;
}
