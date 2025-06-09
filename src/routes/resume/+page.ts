import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	// I have to reset these fields back to the default every time
	// because for some reason the reassignment below edits the
	// actual imported resume.
	// What on earth is wrong with javascript
	// delete data.resume.basics.location;
	delete data.resume.basics.phone;

	// if (data.contacts?.address) data.resume.basics.location =
	if (data.contacts?.phone) data.resume.basics.phone = data.contacts.phone;

	return data;
};
