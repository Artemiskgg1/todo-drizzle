import { relations } from "drizzle-orm";
import {
  integer,
  text,
  boolean,
  pgTable,
  primaryKey,
} from "drizzle-orm/pg-core";
export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
export const group = pgTable("group", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const todoToGroups = pgTable(
  "todo_to_groups",
  {
    todoId: integer("todo_id")
      .notNull()
      .references(() => todo.id),
    groupId: integer("group_id")
      .notNull()
      .references(() => group.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.todoId, t.groupId] }),
  })
);
export const todoRelations = relations(todo, ({ many }) => ({
  todoToGroups: many(todoToGroups),
}));
export const groupRelations = relations(group, ({ many }) => ({
  todoToGroups: many(todoToGroups),
}));
export const todoToGroupsRelations = relations(todoToGroups, ({ one }) => ({
  group: one(group, {
    fields: [todoToGroups.groupId],
    references: [group.id],
  }),
  todo: one(todo, {
    fields: [todoToGroups.todoId],
    references: [todo.id],
  }),
}));
