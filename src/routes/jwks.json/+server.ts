import { getPublicKeys } from '$lib/server/db/queries';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const keys = await getPublicKeys();
	return json({ keys });
};
