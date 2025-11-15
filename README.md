
# 🚀 Innovest – Plateforme Startups & Investisseurs  
Application web moderne permettant la connexion entre startupeurs et investisseurs.  
Développée avec **Next.js 16**, **TypeScript**, **Drizzle ORM**, **PostgreSQL** et **Radix UI / ShadCN components**.

---

## 📌 Fonctionnalités principales

- Authentification Startuper / Investisseur  
- Création de compte (signup)  
- Connexion (login) avec JWT  
- Base de données PostgreSQL (Drizzle ORM)  
- Formulaire avancé : création de startup  
- UI moderne (TailwindCSS, Radix UI, framer-motion)  


---

# ⚙️ Installation & Setup

## 1️⃣ Cloner le projet

```bash
git clone https://github.com/<votre-repo>.git
cd innovest
```

## 2️⃣ Installer les dépendances

```bash
npm install
```

Inclut :

- Next.js 16  
- TailwindCSS  
- Drizzle ORM  
- PostgreSQL client  
- Radix UI  
- ShadCN components  
- JWT Auth  
- Bcrypt  

Si besoin, installe manuellement :

```bash
npm install bcryptjs jsonwebtoken dotenv
npm install class-variance-authority
npm install @radix-ui/react-label @radix-ui/react-checkbox
npm install lucide-react
```

---

# 🔐 Configuration Environnement (.env)

Créer un fichier :

```
.env
```

Et ajouter :

```
DATABASE_URL="postgres://USER:PASSWORD@localhost:5432/innovest"
JWT_SECRET="ta_chaine_secrete_pour_signer_les_jwt"
```

Générer un JWT secret fort :

```bash
"openssl rand -hex 32"
```

---

# 🗄️ Base de données (Drizzle ORM + PostgreSQL)

## 1️⃣ Fichier drizzle.config.ts

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

## 2️⃣ Schéma (src/db/schema.ts)

```ts
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull(),
});

export const startupers = pgTable("startupers", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").notNull(),
  fullName: text("full_name").notNull(),
  startupName: text("startup_name"),
});

export const investors = pgTable("investors", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").notNull(),
  fullName: text("full_name").notNull(),
  investorType: text("investor_type"),
});
```

## 3️⃣ Générer les migrations

```bash
npx drizzle-kit generate
```

Appliquer les migrations :

```bash
npx drizzle-kit migrate
```

Ouvrir Drizzle Studio :

```bash
npx drizzle-kit studio
```

---

# 🔑 Authentification (Signup + Login)

### ✔ API Signup – `/api/auth/signup`
- Vérifie les champs  
- Hash le mot de passe  
- Enregistre selon le rôle  

### ✔ API Login – `/api/auth/login`
- Vérifie email  
- Compare mot de passe (bcrypt)  
- Retourne token JWT + rôle  

---

# 🎨 Composants UI (Input, Label, Button, Checkbox)

Utilisés dans tous les formulaires du projet.

Arborescence :

```
src/components/
  input.tsx
  button.tsx
  label.tsx
  checkbox.tsx
  navbar.tsx
```

---

# 🖥️ Lancer le projet

```bash
npm run dev
```

Ouvrir : http://localhost:3000

---

# 🚀 Build

```bash
npm run build
npm start
```

---

# 🤝 Collaboration Git

1️⃣ Récupérer la dernière version  
```bash
git pull origin main
```

2️⃣ Ajouter ton travail  
```bash
git add .
git commit -m "feat: ajout fonctionnalité"
```

3️⃣ Envoyer sur GitHub  
```bash
git push origin main
```

Si conflit :  

```bash
git pull --rebase origin main
```

---

# 📂 Structure du projet

```
src/
  app/
    signup/
    login/
    startup/create/
    api/
      auth/
        signup/
        login/

  components/
  db/
  lib/
  public/
```

---

# 🧪 Tests rapides

✔ Signup Startuper → OK  
✔ Signup Investor → OK  
✔ Login → OK  
✔ Drizzle Studio → OK  
✔ Dashboard redirection → OK  
✔ Page Create Startup → OK  

---

# 🎉  Innovest 

