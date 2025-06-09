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
}

export {};
