import { desc, eq, gte, sql } from 'drizzle-orm';
import { db } from '..';
import { key, source } from '../schema';

export const getSourceByCode = async (code: string) => {
	return (await db.select().from(source).where(eq(source.code, code)))[0];
};

export const incrementSourceUse = async (code: string) => {
	return (
		await db
			.update(source)
			.set({ use_count: sql`${source.use_count} + 1` })
			.where(eq(source.code, code))
			.returning()
	)[0];
};

export const createKey = async (id: string, pub: string, prv: string) => {
	return (
		await db
			.insert(key)
			.values({
				id,
				public: pub,
				private: prv
			})
			.returning()
	)[0];
};

export const getPublicKeys = async () => {
	return (
		await db.select({ pub: key.public }).from(key).where(gte(key.expires_at, new Date()))
	).map((x) => JSON.parse(x.pub as string));
};

export const getAvailableKeys = async () => {
	return await db.select().from(key).where(gte(key.expires_at, new Date()));
};

export const getLatestKey = async () => {
	const latestKey = (
		await db
			.select()
			.from(key)
			.where(gte(key.deprecates_at, new Date()))
			.orderBy(desc(key.created_at))
			.limit(1)
	)[0];
	return latestKey;
};
