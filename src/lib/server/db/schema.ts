import { sqliteTable, text, integer, blob } from 'drizzle-orm/sqlite-core';
import ShortUniqueId from 'short-unique-id';
const { randomUUID } = new ShortUniqueId({ length: 12, dictionary: 'alpha' });

export const source = sqliteTable('Source', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => `src_${randomUUID()}`),
	description: text('description').notNull(),
	code: text('code').unique().notNull(),
	flags: integer('flags').default(0).notNull(),
	use_count: integer('use_count').default(0).notNull()
});

export const key = sqliteTable('Key', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => `key_${randomUUID()}`),
	created_at: integer('created_at', { mode: 'timestamp' })
		.$defaultFn(() => new Date(Date.now()))
		.notNull(),
	deprecates_at: integer('deprecates_at', { mode: 'timestamp' })
		.$defaultFn(() => new Date(Date.now() + 1000 * 60 * 60 * 24))
		.notNull(),
	expires_at: integer('expires_at', { mode: 'timestamp' })
		.$defaultFn(() => new Date(Date.now() + 1000 * 60 * 60 * 24 * 7))
		.notNull(),
	public: blob('public').notNull(),
	private: blob('private').notNull()
});
