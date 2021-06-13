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
	| "menu"
	| "play"
	| "plus";
export type IconCollection = {
	[key in IconName]: string;
};
export type Icons = {
	[key in IconSize]: IconCollection;
};
export declare const icons: Icons;
export default icons;
