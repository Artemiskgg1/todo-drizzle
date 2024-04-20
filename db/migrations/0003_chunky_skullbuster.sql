ALTER TABLE "todo" ADD COLUMN "group_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "todo" ADD CONSTRAINT "todo_group_id_group_id_fk" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
