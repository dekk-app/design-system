export enum IconSize {
	s = "16",
	m = "24",
	l = "40",
}
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
export declare const icons: Icons;
export default icons;
