import { IconName, IconSize } from "@dekk-ui/icons";
import React from "react";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	icon: IconName;
	size?: IconSize;
}
