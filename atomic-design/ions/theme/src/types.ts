import { Token } from "@dekk-ui/create-token";
import { Radius, RGBColor, Space } from "@dekk-ui/design-tokens";

export interface Theme {
	space: {
		xxs: Token<Space>;
		xs: Token<Space>;
		s: Token<Space>;
		m: Token<Space>;
		l: Token<Space>;
		xl: Token<Space>;
		xxl: Token<Space>;
	};
	radius: {
		s: Token<Radius>;
	};
	ui: {
		colors: {
			primary: Token<RGBColor>;
			lightest: Token<RGBColor>;
			darkest: Token<RGBColor>;
		};
		text: {
			"1": Token<RGBColor>;
			"2": Token<RGBColor>;
		};
		background: {
			"1": Token<RGBColor>;
			"2": Token<RGBColor>;
		};
		outline: {
			"1": Token<RGBColor>;
		};
		fill: {
			"1": Token<RGBColor>;
			"2": Token<RGBColor>;
			"3": Token<RGBColor>;
			"4": Token<RGBColor>;
		};
	};
}
