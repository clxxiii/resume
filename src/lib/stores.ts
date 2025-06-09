import { writable } from 'svelte/store';
import type { ResumeSchema } from './resume-schema';

export const source = writable<App.Source | null>(null);
export const resume = writable<ResumeSchema | null>(null);
