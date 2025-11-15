import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users, startupers, investors } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password, role, fullName, startupName, investorType } = data;

    if (!email || !password || !role || !fullName) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // Vérifier email
    const existing = await db.select().from(users).where(eq(users.email, email));
    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Email déjà utilisé." },
        { status: 409 }
      );
    }

    const hashed = await hash(password, 10);

    // Création user
    const [u] = await db
      .insert(users)
      .values({
        email,
        password: hashed,
        role,
      })
      .returning();

    // INSERT selon le rôle
    if (role === "startuper") {
      await db.insert(startupers).values({
        userId: u.id,
        fullName,
        startupName: startupName || null,
      });
    } else if (role === "investor") {
      await db.insert(investors).values({
        userId: u.id,
        fullName,
        investorType: investorType || null,
      });
    }

    return NextResponse.json(
      { message: "Compte créé avec succès" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur signup:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

