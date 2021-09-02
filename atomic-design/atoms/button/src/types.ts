import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "default" | "text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}
