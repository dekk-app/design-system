export type Hex = `#${string | number}`;

export type RGB = `rgb(${number},${number},${number})`;

export type RGBA = `rgba(${number},${number},${number},${number})`;

export type HSL = `hsl(${number},${number}%,${number}%)`;

export type HSLA = `hsla(${number},${number}%,${number}%,${number})`;

export type ColorType = "hex" | "rgb" | "rgba" | "hsl" | "hsla";

export interface ColorValues {
	hex: Hex;
	rgb: RGB;
	rgba: RGBA;
	hsl: HSL;
	hsla: HSLA;
}

export type ColorOfType<T> = T extends ColorType ? ColorValues[T] : never;

export type Color = ColorOfType<ColorType>;

export type HexColor = ColorOfType<"hex">;

export type RGBColor = ColorOfType<"rgb">;

export type RGBAColor = ColorOfType<"rgba">;

export type HSLColor = ColorOfType<"hsl">;

export type HSLAColor = ColorOfType<"hsla">;
