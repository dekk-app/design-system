import {
	darkest,
	darkText1,
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
			primary: primary.value,
			lightest: lightest.value,
			darkest: darkest.value,
		},
		background: {
			"1": lightest.value,
			"2": darkest.value,
		},
		text: {
			"1": lightText1.value,
			"2": darkText1.value,
		},
		outline: {
			"1": lightOutline1.value,
		},
		fill: {
			"1": lightFill1.value,
			"2": lightFill2.value,
			"3": lightFill3.value,
			"4": lightFill4.value,
		},
	},
};
