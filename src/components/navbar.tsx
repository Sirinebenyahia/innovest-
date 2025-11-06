"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
          Innovest
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <Link
            href="/search"
            className="hover:text-blue-700 transition duration-200"
          >
            Chercher
          </Link>
          <Link
            href="/create-startup"
            className="hover:text-blue-700 transition duration-200"
          >
            Créer une Startup
          </Link>
          <Link
            href="/invest"
            className="hover:text-blue-700 transition duration-200"
          >
            Investir
          </Link>
        </div>

        {/* Boutons Auth */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="border border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-50 hover:shadow-sm transition-all"
          >
            Connexion
          </Link>
          <Link
            href="/signup"
            className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 shadow-md transition-all"
          >
            S’inscrire
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden text-blue-800 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg py-4 animate-fadeIn">
          <div className="flex flex-col items-center gap-4 text-gray-700 font-medium">
            <Link href="/search" className="hover:text-blue-700" onClick={() => setOpen(false)}>
              Chercher
            </Link>
            <Link href="/create-startup" className="hover:text-blue-700" onClick={() => setOpen(false)}>
              Créer une Startup
            </Link>
            <Link href="/invest" className="hover:text-blue-700" onClick={() => setOpen(false)}>
              Investir
            </Link>
            <hr className="w-2/3 border-gray-200 my-2" />
            <Link
              href="/login"
              className="border border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-50 transition"
              onClick={() => setOpen(false)}
            >
              Connexion
            </Link>
            <Link
              href="/signup"
              className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
              onClick={() => setOpen(false)}
            >
              S’inscrire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
