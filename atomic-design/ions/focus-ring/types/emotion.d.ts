import { Theme as ThemeType } from "@dekk-ui/theme";
import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
