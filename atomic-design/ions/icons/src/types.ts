export type IconName =
	| "chartLine"
	| "chevronDown"
	| "chevronRight"
	| "chevronLeft"
	| "chevronUp"
	| "cubeOutline"
	| "formatAlignCenter"
	| "formatAlignJustify"
	| "formatAlignLeft"
	| "formatAlignRight"
	| "formatVerticalAlignBottom"
	| "formatVerticalAlignMiddle"
	| "formatVerticalAlignTop"
	| "formatSize"
	| "formatText"
	| "formatTextBox"
	| "formatTitle"
	| "imageOutline"
	| "menu"
	| "play"
	| "plus"
	| "toyBrickOutline";

export type Icons = {
	[key in IconName]: string;
};
