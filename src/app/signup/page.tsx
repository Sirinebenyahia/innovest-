"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Créer un compte</h1>
      <p className="text-gray-600 mb-10">
        Sélectionnez votre type de profil.
      </p>

      <div className="flex gap-6">
        <Link href="/signup/startuper" className="btn btn-primary">
          Je suis un Startupeur
        </Link>

        <Link href="/signup/investor" className="btn btn-outline">
          Je suis un Investisseur
        </Link>
      </div>
    </main>
  );
}
