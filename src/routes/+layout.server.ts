import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals }) => {
	if (locals.source) {
		return { source: locals.source };
	}
};
