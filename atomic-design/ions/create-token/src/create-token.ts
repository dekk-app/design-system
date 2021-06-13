import { CSSToken, Token } from "./types";

export const createToken = <T>(name: string, value: T, description?: string): Token<T> => {
	return {
		description,
		name,
		value,
	};
};

export const createCSSToken = <T>(value: T, namespace: string, name: string): CSSToken<T> => {
	const propertyName = `--${namespace}--${name}`;
	return {
		token: `var(${propertyName})`,
		propertyName,
		value,
	};
};
