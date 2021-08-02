import { darkest, lightest, primary, primaryDark } from "@dekk-ui/design-tokens/colors";
import * as radius from "@dekk-ui/design-tokens/radiuses";
import * as space from "@dekk-ui/design-tokens/spaces";
import { Except } from "type-fest";
import { Theme } from "./types";

export const base: Except<Theme, "ui"> = {
	space: {
		xxs: space.xxs.value,
		xs: space.xs.value,
		s: space.s.value,
		m: space.m.value,
		l: space.l.value,
		xl: space.xl.value,
		xxl: space.xxl.value,
	},
	radius: {
		s: radius.s.value,
	},
	ci: {
		colors: {
			primary: primary.value,
			primaryDark: primaryDark.value,
			lightest: lightest.value,
			darkest: darkest.value,
		},
	},
};
