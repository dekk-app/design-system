import { Token } from "./types";

export const createToken = <T>(name: string, value: T, description?: string): Token<T> => {
	return {
		description,
		name,
		value,
	};
};
