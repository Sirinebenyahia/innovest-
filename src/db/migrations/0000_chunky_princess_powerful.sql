CREATE TABLE "investors" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"full_name" text NOT NULL,
	"investor_type" text
);
--> statement-breakpoint
CREATE TABLE "startupers" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"full_name" text NOT NULL,
	"startup_name" text
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"role" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
