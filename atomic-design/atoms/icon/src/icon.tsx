import { icons, IconSize } from "@dekk-ui/icons";
import React, { FC } from "react";
import { StyledPath, StyledSvg } from "./styled";
import { IconProps } from "./types";

export const Icon: FC<IconProps> = ({ icon, size, ...props }) => {
	return (
		<StyledSvg {...props} height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
			<StyledPath d={icons[size][icon]} />
		</StyledSvg>
	);
};

Icon.defaultProps = {
	size: IconSize.m,
};
