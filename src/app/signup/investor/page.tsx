"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupInvestor() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    investorType: "",
    password: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        role: "investor",
      }),
    });

    router.push("/login/investor");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Créer un compte Investisseur</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Nom complet"
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />

          <input
            className="input"
            placeholder="Email"
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="input"
            placeholder="Type d’investisseur (ex: Business Angel)"
            onChange={(e) =>
              setForm({ ...form, investorType: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Mot de passe"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="btn btn-primary w-full">Créer le compte</button>
        </form>
      </div>
    </main>
  );
}
