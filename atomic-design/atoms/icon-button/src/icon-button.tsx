import { icons, IconSize } from "@dekk-ui/icons";
import React, { FC } from "react";
import { StyledButton, StyledPath, StyledSvg } from "./styled";
import { IconButtonProps } from "./types";

export const IconButton: FC<IconButtonProps> = ({ icon, size, ...props }) => {
	return (
		<StyledButton {...props} aria-label={icon}>
			<StyledSvg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
				<StyledPath d={icons[size][icon]} />
			</StyledSvg>
		</StyledButton>
	);
};

IconButton.defaultProps = {
	size: IconSize.m,
};
