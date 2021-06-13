export const take = <T = unknown>(array: T[], n = 1): T[] => {
	const a = [...array];
	return a.splice(0, n);
};
