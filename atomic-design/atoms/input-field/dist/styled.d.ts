import { CombinedInputProps, InputProps, PrefixProps } from "./types";
export declare const StyledPrefix: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & PrefixProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledSuffix: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & PrefixProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & InputProps, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const StyledNumberInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & InputProps & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const StyledCombinedInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & CombinedInputProps, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
