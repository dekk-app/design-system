import {
	darkest,
	darkFill1,
	darkFill2,
	darkFill3,
	darkFill4,
	darkOutline1,
	darkText1,
	lightest,
	primary,
} from "@dekk-ui/design-tokens/colors";
import { base } from "./base";
import { Theme } from "./types";

export const dark: Theme = {
	...base,
	ui: {
		colors: {
			primary,
			lightest,
			darkest,
		},
		text: {
			"1": darkText1,
		},
		outline: {
			"1": darkOutline1,
		},
		fill: {
			"1": darkFill1,
			"2": darkFill2,
			"3": darkFill3,
			"4": darkFill4,
		},
	},
};
