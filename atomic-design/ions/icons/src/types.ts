export type IconName =
	| "chartLine"
	| "chevronDown"
	| "chevronRight"
	| "chevronLeft"
	| "chevronUp"
	| "cubeOutline"
	| "deleteOutline"
	| "formatAlignCenter"
	| "formatAlignJustify"
	| "formatAlignLeft"
	| "formatAlignRight"
	| "formatHorizontalAlignCenter"
	| "formatHorizontalAlignLeft"
	| "formatHorizontalAlignRight"
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
