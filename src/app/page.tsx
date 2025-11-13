"use client";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            🚀 Connecte Startups & Investisseurs
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Innovest propulse les jeunes entrepreneurs et facilite la mise en
            relation avec les investisseurs du futur.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link
              href="/start"
              className="bg-blue-700 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-blue-300 hover:scale-105 transition-all duration-300"
            >
              Commencer maintenant       
            </Link>
            <Link
              href="/about"
              className="border border-blue-700 text-blue-700 px-7 py-3 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              En savoir plus
            </Link>
          </div>
        </motion.div>

        <motion.img
          src="/illustration-startup.svg"
          alt="Startup"
          className="w-full md:w-[430px] mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 mb-10"
        >
          💡 Pourquoi choisir Innovest ?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon="🌍"
            title="Réseau Global"
            desc="Accède à un réseau mondial d’investisseurs et d’entrepreneurs."
          />
          <FeatureCard
            icon="⚙️"
            title="Outils puissants"
            desc="Simule tes investissements, gère ton pitch deck et suis ton financement."
          />
          <FeatureCard
            icon="🤝"
            title="Mentorat & Accélération"
            desc="Profite de conseils d’experts et de programmes de croissance personnalisés."
          />
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-blue-50 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-900 mb-14"
        >
          💬 Témoignages d’entrepreneurs
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <Testimonial
            name="Amine B."
            text="Grâce à Innovest, j’ai levé mes premiers fonds en moins de 3 mois. La plateforme est intuitive et la communauté active !"
          />
          <Testimonial
            name="Sarah L."
            text="Un accompagnement personnalisé et un vrai réseau d’investisseurs prêts à aider. Innovest a changé ma trajectoire."
          />
          <Testimonial
            name="Rayan K."
            text="Simple, fluide, et efficace. J’ai trouvé mon cofondateur et nos premiers investisseurs ici !"
          />
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Rejoins la communauté Innovest dès aujourd’hui !
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Commence gratuitement et transforme ton idée en startup à succès.
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-lg hover:scale-105 transition-all duration-300"
          >
            S’inscrire gratuitement
          </Link>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-12 border-t mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-8 text-sm text-gray-600">
          <FooterColumn title="Entreprise" links={["À propos", "Carrières", "Contact"]} />
          <FooterColumn title="Solutions" links={["Créer une startup", "Lever des fonds", "Investir"]} />
          <FooterColumn title="Ressources" links={["Blog", "Support", "FAQ"]} />
          <FooterColumn title="Légal" links={["Confidentialité", "Conditions d’utilisation"]} />
        </div>
        <p className="text-center text-gray-500 mt-10 text-xs">
          © {new Date().getFullYear()} Innovest — Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}

/* === Composants réutilisables avec animation === */
function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-8 text-center border border-blue-100"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
    >
      <p className="italic text-gray-700 mb-4">“{text}”</p>
      <p className="font-semibold text-blue-800">{name}</p>
    </motion.div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-800 mb-3">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <Link href="#" className="hover:text-blue-700 transition">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
