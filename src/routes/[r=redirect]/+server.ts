import redirects from '$lib/assets/redirects.json';

import { StatusCodes } from '$lib/StatusCodes.js';
import { error, redirect } from '@sveltejs/kit';

export const GET = ({ params }) => {
	const location = redirects.find((x) => x.path == params.r);
	if (!location) throw error(StatusCodes.INTERNAL_SERVER_ERROR);
	throw redirect(StatusCodes.TEMPORARY_REDIRECT, location.href);
};
