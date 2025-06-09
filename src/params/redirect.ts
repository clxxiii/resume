import redirects from '$lib/assets/redirects.json';

export const match = (path: string) => {
	const href = redirects.find((x) => x.path == path);
	return href != undefined;
};
