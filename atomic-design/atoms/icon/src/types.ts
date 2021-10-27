import { IconName } from "@dekk-ui/icons";
import { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
	icon: IconName;
}
