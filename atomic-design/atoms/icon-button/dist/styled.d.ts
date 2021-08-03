import { Except } from "type-fest";
import { IconButtonProps } from "./types";
export declare const StyledSvg: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").SVGProps<SVGSVGElement>, {}>;
export declare const StyledPath: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").SVGProps<SVGPathElement>, {}>;
export declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & Except<IconButtonProps, "icon" | "size">, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
