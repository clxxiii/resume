/**
 * A bunch of functions that convert the data from the resume.yml
 * from the original format into one that's easier to render
 * as a reusable components
 */
import type { ResumeSchema } from './resume-schema';

const getProjects = (resume: ResumeSchema): [string, unknown][] => {
	const projects = resume?.projects;
	if (!projects) return [];

	const out: { [key: string]: unknown[] } = {};
	for (const p of projects) {
		const type = p.type;
		if (!type) continue;
		if (!out[type]) out[type] = [];
		out[type].push(p);
	}

	return Object.entries(out);
};

const getEverythingElse = (resume: ResumeSchema): [string, unknown][] => {
	const ignoredResumeProperties = ['$schema', 'basics', 'projects'];
	return Object.entries(resume ?? []).filter((x) => !ignoredResumeProperties.includes(x[0]));
};

type ContactType = string | { text: string; url: string };
const getLocation = (resume: ResumeSchema): [string, string][] => {
	const location = resume?.basics?.location;
	if (!location) return [];
	const order = ['address', 'city', 'region', 'countryCode', 'postalCode'];
	const locationString = Object.entries(location)
		.sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]))
		.map((x) => x[1])
		.join(', ');
	return [['location', locationString]];
};

const getStringEntries = (resume: ResumeSchema): [string, string][] => {
	const basics = resume?.basics;
	if (!basics) return [];

	const basicsIgnoredProps = ['name', 'label', 'summary'];
	return Object.entries(basics)
		.filter((x) => typeof x[1] == 'string')
		.filter((x) => !basicsIgnoredProps.includes(x[0])) as [string, string][];
};

const getProfiles = (resume: ResumeSchema): [string, { text: string; url: string }][] => {
	const profiles = resume?.basics?.profiles;
	if (!profiles) return [];
	return profiles
		.filter((x) => x.network)
		.map((x) => [x.network, { text: x.username ?? '', url: x.url ?? '' }]) as [
		string,
		{ text: string; url: string }
	][];
};

export const getContacts = (resume: ResumeSchema): [string, ContactType][] => [
	...getLocation(resume),
	...getStringEntries(resume),
	...getProfiles(resume)
];

export const getSections = (resume: ResumeSchema) => [
	...getProjects(resume),
	...getEverythingElse(resume)
];
