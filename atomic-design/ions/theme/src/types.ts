import { Radius, RGBColor, Space } from "@dekk-ui/design-tokens";

export interface Theme {
	space: {
		xxs: Space;
		xs: Space;
		s: Space;
		m: Space;
		l: Space;
		xl: Space;
		xxl: Space;
	};
	radius: {
		s: Radius;
	};
	ci: {
		colors: {
			primary: RGBColor;
			primaryDark: RGBColor;
			lightest: RGBColor;
			darkest: RGBColor;
		};
	};
	ui: {
		colors: {
			primary: RGBColor;
			lightest: RGBColor;
			darkest: RGBColor;
		};
		text: {
			"1": RGBColor;
			"2": RGBColor;
		};
		background: {
			"1": RGBColor;
			"2": RGBColor;
		};
		outline: {
			"1": RGBColor;
		};
		fill: {
			"1": RGBColor;
			"2": RGBColor;
			"3": RGBColor;
			"4": RGBColor;
		};
	};
	/* eslint-disable no-unused-vars */
	palette: {
		red: string;
		green: string;
		blue: string;
		yellow: string;
		dark: string;
		light: string;
		purple: string;
		darkPurple: string;
	};
}
