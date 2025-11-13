"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupStartuper() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    startupName: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          role: "startuper",
        }),
      });

      if (!res.ok) {
        console.error("Erreur signup");
        return;
      }

      router.push("/login/startuper");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[hsl(var(--background))]">
      <div className="w-full max-w-md bg-white border rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Créer un compte Startupeur
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Rejoins Innovest et présente ta startup aux investisseurs.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Nom complet"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />

          <input
            className="input"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            className="input"
            placeholder="Nom de la startup"
            value={form.startupName}
            onChange={(e) => setForm({ ...form, startupName: e.target.value })}
          />

          <input
            className="input"
            placeholder="Mot de passe"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button className="btn btn-primary w-full" type="submit">
            Créer le compte
          </button>
        </form>
      </div>
    </main>
  );
}
