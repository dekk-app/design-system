import { IconSize } from "./enums";

export type IconName =
	| "chevronDown"
	| "chevronRight"
	| "chevronLeft"
	| "chevronUp"
	| "editorImage"
	| "editorText"
	| "menu"
	| "play"
	| "plus";
export type IconCollection = {
	[key in IconName]: string;
};
export type Icons = {
	[key in IconSize]: IconCollection;
};
