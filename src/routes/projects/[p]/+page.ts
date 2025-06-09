import { error } from '@sveltejs/kit';
import { StatusCodes } from '$lib/StatusCodes';
import type PageLoad from './$types';

export const load: PageLoad = async ({ params }) => {
	const { default: projects } = await import('$lib/assets/projects.yml');
	const project: Project | undefined = projects[params.p];
	if (!project) {
		throw error(StatusCodes.NOT_FOUND);
	}

	return { project, id: params.p };
};
