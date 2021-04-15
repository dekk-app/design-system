export interface Token<T = unknown> {
	name: string;
	value: T;
	description?: string;
}
