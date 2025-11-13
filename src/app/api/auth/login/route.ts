import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis." },
        { status: 400 }
      );
    }

    // Vérifier si utilisateur existe
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (!user) {
      return NextResponse.json(
        { error: "Aucun compte trouvé avec cet email." },
        { status: 404 }
      );
    }

    // Vérifier mot de passe
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Mot de passe incorrect." },
        { status: 401 }
      );
    }

    // Vérifier JWT_SECRET
    if (!process.env.JWT_SECRET) {
      console.error("❌ ERREUR : JWT_SECRET manquant dans .env");
      return NextResponse.json(
        { error: "Erreur de configuration serveur." },
        { status: 500 }
      );
    }

    // Générer JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3h" } // tu peux changer
    );

    return NextResponse.json({
      message: "Connexion réussie ✔",
      token,
      role: user.role,
    });
  } catch (error) {
    console.error("🔥 Erreur API Login :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
