import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusion intelligente des classes Tailwind.
 * Très utile dans tes composants UI shadcn.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Pause asynchrone (utile pour animations, tests, loaders)
 */
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Capitalise la première lettre d'une chaîne
 */
export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Vérifie si une chaîne est un email valide
 */
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Génère un slug lisible pour les URLs (utilisé pour startups)
 * Exemple : "Green AI Solutions" → "green-ai-solutions"
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")        // Supprime accents
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")  // Supprime caractères spéciaux
    .trim()
    .replace(/\s+/g, "-");   // Espaces → tirets
}

/**
 * Limite un texte à X caractères (utile pour descriptions)
 */
export function truncate(text: string, length: number) {
  if (!text) return "";
  return text.length > length ? text.slice(0, length) + "..." : text;
}
