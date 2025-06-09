import { Flag, hasPermission } from '$lib/flag';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { default: resume } = await import('$lib/assets/resume.yml');

	if (!locals.source) return { resume };

	const { env } = await import('$env/dynamic/private');
	const address = env.SECRET_ADDRESS;
	const phone = env.SECRET_PHONE;

	const contacts: { address?: string; phone?: string } = {};
	if (hasPermission(locals.source.flags, Flag.SHOW_ADDRESS)) {
		contacts.address = address;
	}
	if (hasPermission(locals.source.flags, Flag.SHOW_PHONE)) {
		contacts.phone = phone;
	}

	return { resume, contacts };
};
