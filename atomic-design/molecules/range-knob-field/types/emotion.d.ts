import { Theme as ThemeType } from "../../../ions/theme/src/types";
import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
