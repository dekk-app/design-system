import { icons, IconSize } from "@dekk-ui/icons";
import { IconButtonProps, StyledIconButton, StyledPath, StyledSvg } from "@dekk-ui/button";
import React from "react";

export const IconButton: React.FC<IconButtonProps> = ({ icon, size, ...props }) => {
	return (
		<StyledIconButton {...props} aria-label={icon}>
			<StyledSvg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
				<StyledPath d={icons[size][icon]} />
			</StyledSvg>
		</StyledIconButton>
	);
};

IconButton.defaultProps = {
	size: IconSize.m,
};
