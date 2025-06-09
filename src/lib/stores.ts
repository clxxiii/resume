import { writable } from 'svelte/store';

export const source = writable<App.Source | null>(null);
