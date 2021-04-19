import {
	darkest,
	lightest,
	lightFill1,
	lightFill2,
	lightFill3,
	lightFill4,
	lightOutline1,
	lightText1,
	primary,
} from "@dekk-ui/design-tokens/colors";
import { base } from "./base";
import { Theme } from "./types";

export const light: Theme = {
	...base,
	ui: {
		colors: {
			primary,
			lightest,
			darkest,
		},
		text: {
			"1": lightText1,
		},
		outline: {
			"1": lightOutline1,
		},
		fill: {
			"1": lightFill1,
			"2": lightFill2,
			"3": lightFill3,
			"4": lightFill4,
		},
	},
};
