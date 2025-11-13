"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Connexion</h1>
      <p className="text-gray-600 mb-8">Choisissez votre espace</p>

      <div className="flex gap-6">
        <Link href="/login/startuper" className="btn btn-primary">
          Espace Startupeur
        </Link>

        <Link href="/login/investor" className="btn btn-outline">
          Espace Investisseur
        </Link>
      </div>
    </main>
  );
}
