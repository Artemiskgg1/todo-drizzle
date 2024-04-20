import { pgTable, text, integer, boolean } from "drizzle-orm/pg-core";

export const groups = pgTable("group", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  groupId: integer("group_id").references(() => groups.id),
});
