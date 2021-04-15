import { radiuses, spaces } from "@dekk-ui/design-tokens";
import { Except } from "type-fest";
import { Theme } from "./types";

export const base: Except<Theme, "ui"> = {
	space: {
		xxs: spaces.xxs,
		xs: spaces.xs,
		s: spaces.s,
		m: spaces.m,
		l: spaces.l,
		xl: spaces.xl,
		xxl: spaces.xxl,
	},
	radius: {
		s: radiuses.s,
	},
};
