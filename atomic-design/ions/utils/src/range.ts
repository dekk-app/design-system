export const range = (length: number, start = 0) =>
	Array.from({ length }).map((x, index) => index + start);
