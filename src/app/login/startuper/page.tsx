"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginStartuperPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok && data.role === "STARTUP") {
      router.push("/dashboard/startuper");
    } else {
      alert("Email ou mot de passe incorrect");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        
        <h2 className="text-2xl font-bold mb-6 text-center text-[#003f3a]">
          Connexion Startupeur 🚀
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006A63]"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006A63]"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#006A63] text-white font-semibold rounded-full shadow hover:bg-[#00534F] transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}
