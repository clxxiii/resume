import type PageLoad from './$types';

export const prerender = true;
export const load: PageLoad = async () => {
	const { default: projects } = await import('$lib/assets/projects.yml');
	return { projects };
};
