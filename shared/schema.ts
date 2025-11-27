import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  googleId: text("google_id").unique(),
  email: text("email").notNull(),
  name: text("name"),
  avatar: text("avatar"),
  mode: text("mode").$type<"career" | "business">().default("career"),
  createdAt: timestamp("created_at").defaultNow(),
});
