export const getDeg = (pointer: { x: number; y: number }, center: number) => {
	const x = pointer.x - center;
	const y = pointer.y - center;
	let deg = (Math.atan(y / x) * 180) / Math.PI;
	deg += (x < 0 && y >= 0) || (x < 0 && y < 0) ? 270 : 90;
	return deg;
};
