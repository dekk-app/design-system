import {
	darkest,
	darkFill1,
	darkFill2,
	darkFill3,
	darkFill4,
	darkOutline1,
	darkText1,
	lightest,
	lightText1,
	primary,
} from "@dekk-ui/design-tokens/colors";
import { base } from "./base";
import { Theme } from "./types";

export const dark: Theme = {
	...base,
	ui: {
		colors: {
			primary: primary.value,
			lightest: lightest.value,
			darkest: darkest.value,
		},
		background: {
			"1": darkest.value,
			"2": lightest.value,
		},
		text: {
			"1": darkText1.value,
			"2": lightText1.value,
		},
		outline: {
			"1": darkOutline1.value,
		},
		fill: {
			"1": darkFill1.value,
			"2": darkFill2.value,
			"3": darkFill3.value,
			"4": darkFill4.value,
		},
	},
};
