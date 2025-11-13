"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginStartuper() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleLogin(e: any) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.role === "startuper") {
      router.push("/dashboard/startuper");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">Connexion Startupeur</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            className="input"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="input"
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="btn btn-primary w-full">Se connecter</button>
        </form>
      </div>
    </main>
  );
}
