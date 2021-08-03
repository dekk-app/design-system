export declare type Hex = `#${string | number}`;
export declare type RGB = `rgb(${number},${number},${number})`;
export declare type RGBA = `rgba(${number},${number},${number},${number})`;
export declare type HSL = `hsl(${number},${number}%,${number}%)`;
export declare type HSLA = `hsla(${number},${number}%,${number}%,${number})`;
export declare type ColorType = "hex" | "rgb" | "rgba" | "hsl" | "hsla";
export interface ColorValues {
    hex: Hex;
    rgb: RGB;
    rgba: RGBA;
    hsl: HSL;
    hsla: HSLA;
}
export declare type ColorOfType<T> = T extends ColorType ? ColorValues[T] : never;
export declare type Color = ColorOfType<ColorType>;
export declare type HexColor = ColorOfType<"hex">;
export declare type RGBColor = ColorOfType<"rgb">;
export declare type RGBAColor = ColorOfType<"rgba">;
export declare type HSLColor = ColorOfType<"hsl">;
export declare type HSLAColor = ColorOfType<"hsla">;
