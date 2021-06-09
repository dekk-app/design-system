export const rem = (size: number, baseSize = 16) => size / baseSize;

export const pxToRem = (pixels: number) => `${rem(pixels)}rem`;

export const getDeg = (pointer: { x: number; y: number }, center: number) => {
	const x = pointer.x - center;
	const y = pointer.y - center;
	let deg = (Math.atan(y / x) * 180) / Math.PI;
	deg += (x < 0 && y >= 0) || (x < 0 && y < 0) ? 270 : 90;
	return deg;
};

export const clamp = (value: number, max: number, min = 0) => Math.min(max, Math.max(min, value));
