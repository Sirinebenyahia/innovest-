"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginInvestor() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // indispensable
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erreur de connexion");
        return;
      }

      // si le backend renvoie bien role: "investor"
      if (data.role === "investor") {
        router.push("/dashboard/investor");
      } else if (data.role === "startuper") {
        // au cas où tu utilises le même formulaire pour les 2
        router.push("/dashboard/startuper");
      } else {
        alert("Rôle inconnu, vérifie tes données.");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur serveur.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">Connexion Investisseur</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            className="input"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="input"
            type="password"
            placeholder="Mot de passe"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit" className="btn btn-primary w-full">
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}
