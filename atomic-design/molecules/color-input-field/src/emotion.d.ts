import { Theme as ThemeType } from "@dekk-ui/theme";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
