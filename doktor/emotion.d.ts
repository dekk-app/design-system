import "@emotion/react";
import { Theme as ThemeType } from "../atomic-design/ions/theme";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
