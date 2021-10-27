import { icons } from "@dekk-ui/icons";
import React, { FC } from "react";
import { StyledButton, StyledPath, StyledSvg } from "./styled";
import { IconButtonProps } from "./types";

export const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
	return (
		<StyledButton {...props} aria-label={icon}>
			<StyledSvg height={24} width={24} viewBox={`0 0 24 24`}>
				<StyledPath d={icons[icon]} />
			</StyledSvg>
		</StyledButton>
	);
};
