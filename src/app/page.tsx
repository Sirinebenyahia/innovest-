"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { fadeUp, scaleIn, staggerParent } from "@/lib/motion";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />

        <div className="container grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="block">Connecte</span>
              <span className="text-[hsl(var(--primary))]">
                {" "}
                Startups & Investisseurs
              </span>
            </h1>
            <p className="mt-5 text-lg text-[hsl(var(--muted-foreground))]">
              Innovest propulse les jeunes entrepreneurs et facilite la mise en
              relation avec des investisseurs qualifiés. Interface moderne,
              fluide et ambitieuse.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/signup" className="btn btn-primary">
                Commencer maintenant
              </Link>
              <Link href="/about" className="btn btn-ghost">
                En savoir plus
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="card glass p-0 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Illustration Innovest"
                width={700}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALEURS */}
      <motion.section
        variants={staggerParent}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container py-14"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            title="Réseau global"
            desc="Accède à un réseau mondial d’investisseurs, mentors et partenaires."
          />
          <ValueCard
            title="Outils intégrés"
            desc="Pitch deck, suivi de traction et data-room au même endroit."
          />
          <ValueCard
            title="Accélération"
            desc="Programmes, conseils et connexions pour aller plus vite."
          />
        </div>
      </motion.section>

      {/* FEEDBACKS */}
      <section className="py-20 bg-[hsl(var(--background-alt))]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-10 text-[hsl(var(--foreground))]">
            Témoignages de nos utilisateurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeedbackCard
              name="Yasmine Ben Ali"
              role="Fondatrice de MedConnect"
              text="Innovest m’a permis de trouver mes premiers investisseurs en moins d’un mois. Interface fluide et efficace !"
            />
            <FeedbackCard
              name="Omar Trabelsi"
              role="Investisseur"
              text="J’ai pu découvrir des projets tunisiens prometteurs très facilement. Plateforme intuitive et pro."
            />
            <FeedbackCard
              name="Nadia Jaziri"
              role="CEO EcoTech"
              text="Une expérience fluide et moderne pour connecter startups et investisseurs — bravo à l’équipe !"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2025 Innovest — Tous droits réservés.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/about" className="hover:text-[hsl(var(--primary))]">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-[hsl(var(--primary))]">
              Contact
            </Link>
            <Link href="/formations" className="hover:text-[hsl(var(--primary))]">
              Formations
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="card hover:-translate-y-0.5 transition-transform"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
        {desc}
      </p>
    </motion.div>
  );
}

function FeedbackCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <p className="italic mb-4 text-[hsl(var(--muted-foreground))]">“{text}”</p>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-[hsl(var(--muted-foreground))]">{role}</p>
    </div>
  );
}
