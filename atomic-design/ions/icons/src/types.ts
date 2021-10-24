import { IconSize } from "./enums";

export type IconName =
	| "chevronDown"
	| "chevronRight"
	| "chevronLeft"
	| "chevronUp"
	| "editorImage"
	| "editorText"
	| "formatAlignCenter"
	| "formatAlignJustify"
	| "formatAlignLeft"
	| "formatAlignRight"
	| "formatVerticalAlignBottom"
	| "formatVerticalAlignMiddle"
	| "formatVerticalAlignTop"
	| "formatTextBox"
	| "menu"
	| "play"
	| "plus";

export type IconCollection = {
	[key in IconName]: string;
};

export interface Icons {
	[IconSize.s]: Partial<IconCollection>;
	[IconSize.m]: IconCollection;
	[IconSize.l]: Partial<IconCollection>;
}
