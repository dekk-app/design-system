import { icons } from "@dekk-ui/icons";
import React, { forwardRef } from "react";
import { StyledPath, StyledSvg } from "./styled";
import { IconProps } from "./types";

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ icon, ...props }, ref) => {
	return (
		<StyledSvg ref={ref} height={24} width={24} {...props} viewBox={`0 0 24 24`}>
			<StyledPath d={icons[icon]} />
		</StyledSvg>
	);
});
