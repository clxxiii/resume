import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	// I have to reset these fields back to the default every time
	// because for some reason the reassignment below edits the
	// actual imported resume.
	// What on earth is wrong with javascript
	data.resume.contact.address = { hidden: true };
	data.resume.contact.phone = { hidden: true };

	if (data.contacts?.address) data.resume.contact.address = data.contacts.address;
	if (data.contacts?.phone) data.resume.contact.phone = data.contacts.phone;

	return data;
};
