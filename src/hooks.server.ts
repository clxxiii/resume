import { building } from '$app/environment';
import { createJWT, verifyJWT } from '$lib/server/jwt';
import { StatusCodes } from '$lib/StatusCodes';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
	if (building) {
		return await resolve(event);
	}

	const sourceCode = event.url.searchParams.get('s');
	if (sourceCode) {
		const { getSourceByCode } = await import('$lib/server/db/queries');
		const source = await getSourceByCode(sourceCode);
		if (source) {
			const jwt = await createJWT(source, false);
			event.cookies.set('fereira_session', jwt, { maxAge: 60 * 60 * 25 * 31, path: '/' });
		}
		const url = event.url.origin + event.url.pathname;
		throw redirect(StatusCodes.TEMPORARY_REDIRECT, url);
	}

	const cookie = event.cookies.get('fereira_session');
	if (cookie) {
		const verification = await verifyJWT(cookie);
		if (!verification) {
			event.cookies.delete('fereira_session', { path: '/' });
		} else {
			const { getSourceByCode } = await import('$lib/server/db/queries');
			const source = await getSourceByCode(verification.payload.sub ?? '');
			if (source) event.locals.source = source;

			if (verification.deprecated && source) {
				const jwt = await createJWT(source, true);
				event.cookies.set('fereira_session', jwt, { maxAge: 60 * 60 * 25 * 31, path: '/' });
			}
		}
	}
	return await resolve(event);
};
