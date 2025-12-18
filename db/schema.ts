import { pgTable, text, uuid, boolean } from "drizzle-orm/pg-core";

export const bookingTable = pgTable("reservation", {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  telnumber: text().notNull(),
  numberppl: text().notNull(),
  date: text().notNull(),
});
