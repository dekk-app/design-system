import { icons } from "@dekk-ui/icons";
import React, { forwardRef } from "react";
import { StyledButton, StyledPath, StyledSvg } from "./styled";
import { IconButtonProps } from "./types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ icon, ...props }, ref) => {
		return (
			<StyledButton ref={ref} {...props} aria-label={icon}>
				<StyledSvg height={24} width={24} viewBox="0 0 24 24">
					<StyledPath d={icons[icon]} />
				</StyledSvg>
			</StyledButton>
		);
	}
);
