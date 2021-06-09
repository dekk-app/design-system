import { icons, IconSize } from "@dekk-ui/icons";
import React from "react";
import { StyledButton, StyledPath, StyledSvg } from "./styled";
import { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({ icon, size, ...props }) => {
	return (
		<StyledButton {...props}>
			<StyledSvg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
				<StyledPath d={icons[size][icon]} />
			</StyledSvg>
		</StyledButton>
	);
};

IconButton.defaultProps = {
	size: IconSize.m,
};
