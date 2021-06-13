export const take = <T extends unknown = unknown>(array: T[], n = 1): T[] => {
	const a = [...array];
	return a.splice(0, n);
};
