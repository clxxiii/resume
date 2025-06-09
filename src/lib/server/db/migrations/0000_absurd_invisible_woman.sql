CREATE TABLE `Key` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`deprecates_at` integer NOT NULL,
	`expires_at` integer NOT NULL,
	`public` blob NOT NULL,
	`private` blob NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Source` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`code` text NOT NULL,
	`flags` integer DEFAULT 0 NOT NULL,
	`use_count` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Source_code_unique` ON `Source` (`code`);