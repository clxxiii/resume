import * as db from '$lib/server/db/schema';
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		type Source = typeof db.source.$inferSelect;
		type Key = typeof db.key.$inferSelect;
		// interface Error {}
		interface Locals {
			source?: App.Source;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type Project = {
		name: string;
		headline: string;
		banner: string;
		description?: string;
		images?: string[];
	};

	type Resume = {
		name: string;
		headline: string;
		contact: { [key: string]: Resume.Contact };
		sections: { [key: string]: Resume.Section };
	};

	namespace Resume {
		type Section = {
			text?: string;
			[key: string]: Entry;
		};
		type Entry = {
			title?: string;
			url?: string;
			organization?: string;
			date?: string;
			details?: string | string[];
		};
		type Contact =
			| string
			| {
					text?: string;
					url?: string;
					icon?: string;
					hidden?: boolean;
			  };
	}
}

export {};
