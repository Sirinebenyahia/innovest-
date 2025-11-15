import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull(), // "startuper" ou "investor"
});

export const startupers = pgTable("startupers", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").notNull(), 
  fullName: text("full_name").notNull(),
  startupName: text("startup_name"),
});
export const investors = pgTable("investors", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").notNull(),
  fullName: text("full_name").notNull(),
  investorType: text("investor_type"),
});
