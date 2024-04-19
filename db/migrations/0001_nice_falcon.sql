CREATE TABLE IF NOT EXISTS "group" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todo_to_groups" (
	"todo_id" integer NOT NULL,
	"group_id" integer NOT NULL,
	CONSTRAINT "todo_to_groups_todo_id_group_id_pk" PRIMARY KEY("todo_id","group_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "todo_to_groups" ADD CONSTRAINT "todo_to_groups_todo_id_todo_id_fk" FOREIGN KEY ("todo_id") REFERENCES "todo"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "todo_to_groups" ADD CONSTRAINT "todo_to_groups_group_id_group_id_fk" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
