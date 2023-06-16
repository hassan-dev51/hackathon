import { pgTable, varchar, serial, integer } from "drizzle-orm/pg-core";

import { drizzle } from "drizzle-orm/vercel-postgres";

import { sql } from "@vercel/postgres";

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
  price: integer("price").notNull(),
  image: varchar("image", { length: 255 }).notNull(),
  item: varchar("item", { length: 255 }).notNull(),
  category: varchar("category", { length: 255 }).notNull(),
});

export const db = drizzle(sql);
