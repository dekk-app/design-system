import { createToken } from "@dekk-ui/create-token";
import { RGBColor } from "./types";

export const white = createToken<RGBColor>("White", "rgb(255, 255, 255)", "White");
export const black = createToken<RGBColor>("Black", "rgb(0, 0, 0)", "Black");

// Brand Colors

export const primary = createToken<RGBColor>("Primary", "rgb(106, 38, 233)", "Primary Brand Color");

export const primaryDark = createToken<RGBColor>(
	"Primary Dark",
	"rgb(79, 19, 192)",
	"Primary Dark Brand Color"
);

export const lightest = createToken<RGBColor>("Lightest", white.value, "Lightest Brand Color");

export const darkest = createToken<RGBColor>("Darkest", "rgb(35, 36, 33)", "Darkest Brand Color");

export const highlight = createToken<RGBColor>("Highlight", "rgb(43, 147, 255)", "Highlight Color");

// Text Colors
export const lightText1 = createToken<RGBColor>(
	"Light Text 1",
	black.value,
	"Light Mode Text Color 1"
);

export const darkText1 = createToken<RGBColor>(
	"Dark Text 1",
	white.value,
	"Dark Mode Text Color 1"
);

// Outline Colors
export const lightOutline1 = createToken<RGBColor>(
	"Light Outline 1",
	"rgb(220, 220, 225)",
	"Light Mode Outline Color 1"
);

export const darkOutline1 = createToken<RGBColor>(
	"Dark Outline 1",
	"rgb(44, 44, 46)",
	"Dark Mode Outline Color 1"
);

// Fill Colors
export const lightFill1 = createToken<RGBColor>(
	"Light Fill 1",
	"rgb(236,237,239)",
	"Light Mode Fill Color 1"
);

export const darkFill1 = createToken<RGBColor>(
	"Dark Fill 1",
	"rgb(56, 56, 56)",
	"Dark Mode Fill Color 1"
);

export const lightFill2 = createToken<RGBColor>(
	"Light Fill 2",
	"rgb(239,239,243)",
	"Light Mode Fill Color 2"
);

export const darkFill2 = createToken<RGBColor>(
	"Dark Fill 2",
	"rgb(27, 27, 27)",
	"Dark Mode Fill Color 2"
);

export const lightFill3 = createToken<RGBColor>(
	"Light Fill 3",
	"rgb(153, 153, 153)",
	"Light Mode Fill Color 3"
);

export const darkFill3 = createToken<RGBColor>(
	"Dark Fill 3",
	"rgb(90, 90, 90)",
	"Dark Mode Fill Color 3"
);

export const lightFill4 = createToken<RGBColor>(
	"Light Fill 4",
	"rgb(27, 30, 43)",
	"Light Mode Fill Color 4"
);

export const darkFill4 = createToken<RGBColor>(
	"Dark Fill 4",
	white.value,
	"Dark Mode Fill Color 4"
);
