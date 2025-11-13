import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password, role } = await request.json();

    // Vérifier champs requis
    if (!email || !password || !role) {
      return NextResponse.json(
        { error: "Email, mot de passe et rôle requis." },
        { status: 400 }
      );
    }

    // Vérifier si email existe déjà
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "Un compte existe déjà avec cet email." },
        { status: 409 }
      );
    }

    // Hash du mot de passe
    const hashedPassword = await hash(password, 10);

    // Créer utilisateur
    await db.insert(users).values({
      email,
      password: hashedPassword,
      role: role.toUpperCase(), // STARTUP / INVESTOR
    });

    return NextResponse.json(
      { message: "Compte créé avec succès ✔" },
      { status: 201 }
    );
  } catch (error) {
    console.error("🔥 Erreur API Signup :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
