"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/search", label: "Chercher" },
  { href: "/create-startup", label: "Créer une startup" },
  { href: "/invest", label: "Investir" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`navbar ${
        scrolled ? "shadow-md border-[hsl(var(--border))]" : "border-transparent"
      }`}
    >
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-[hsl(var(--primary))]" />
          <span className="text-xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Innovest
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium relative group ${
                  active
                    ? "text-[hsl(var(--primary))]"
                    : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[hsl(var(--primary))] transition-all ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn btn-ghost">
            Connexion
          </Link>
          <Link href="/signup" className="btn btn-primary">
            S’inscrire
          </Link>
        </div>

        <button
          className="md:hidden text-[hsl(var(--foreground))]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <div className="container py-4 space-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Link href="/login" className="btn btn-ghost flex-1">
                Connexion
              </Link>
              <Link href="/signup" className="btn btn-primary flex-1">
                S’inscrire
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
