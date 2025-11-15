'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';

export default function CreateStartup() {
  const router = useRouter();

  // =======================
  //  ÉTATS
  // =======================

  const [startupName, setStartupName] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [founderName, setFounderName] = useState('');
  const [founderRole, setFounderRole] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [socialLinks, setSocialLinks] = useState('');
  const [accept, setAccept] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  // =======================
  //  VALIDATIONS
  // =======================

  const validate = () => {
    const e: Record<string, string> = {};

    if (!startupName.trim()) e.startupName = 'Nom de la startup requis.';
    if (!sector.trim()) e.sector = 'Secteur requis.';
    if (!description.trim()) e.description = 'Description requise.';
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Email invalide.';

    if (password.length < 8) e.password = 'Minimum 8 caractères.';
    if (password !== confirmPassword)
      e.confirmPassword = 'Les mots de passe ne correspondent pas.';

    if (!phone.trim()) e.phone = 'Numéro requis.';
    if (!address.trim()) e.address = 'Adresse requise.';
    if (!founderName.trim()) e.founderName = 'Nom requis.';
    if (!founderRole.trim()) e.founderRole = 'Rôle requis.';
    if (!accept) e.accept = 'Vous devez accepter les conditions.';

    return e;
  };

  // =======================
  //  SOUMISSION
  // =======================

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const e = validate();
    setErrors(e);

    if (Object.keys(e).length > 0) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('startupName', startupName);
      formData.append('sector', sector);
      formData.append('description', description);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', phone);
      formData.append('address', address);
      formData.append('website', website);
      formData.append('founderName', founderName);
      formData.append('founderRole', founderRole);
      formData.append('socialLinks', socialLinks);

      if (logo) formData.append('logo', logo);

      const res = await fetch('/api/startup/create', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrors({ server: data?.error || 'Erreur serveur.' });
        return;
      }

      router.replace('/dashboard');
    } catch (err: any) {
      setErrors({ server: err.message || 'Erreur réseau.' });
    } finally {
      setLoading(false);
    }
  };

  // =======================
  //  AFFICHAGE
  // =======================

  return (
    <main className="min-h-screen w-full bg-hero-gradient pt-28 pb-16 px-6 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl space-y-12">

        {/* TITRE */}
        <h1 className="text-4xl font-extrabold text-center tracking-tight">
          Créer votre startup{' '}
          <span className="text-[hsl(var(--primary))]">InnoVest</span>
        </h1>

        {/* =======================
            GRILLE PRINCIPALE
        ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LOGO */}
          <section className="card">
            <h2 className="text-lg font-semibold mb-4">Logo de la startup</h2>

            <div
              className="w-full h-48 rounded-lg bg-gray-50 flex flex-col justify-center items-center
                         border-2 border-dashed border-[hsl(var(--border))]
                         hover:border-[hsl(var(--primary))] transition"
            >
              <Label htmlFor="logo" className="cursor-pointer text-sm font-medium">
                Cliquez ou déposez une image ici
              </Label>

              <Input
                id="logo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setLogo(e.target.files?.[0] || null)}
              />

              <p className="text-xs mt-2 text-gray-400">JPG, PNG, SVG</p>
            </div>
          </section>

          {/* COORDONNÉES */}
          <section className="card">
            <h2 className="text-lg font-semibold mb-4">Coordonnées de contact</h2>

            <div className="space-y-3">

              <div>
                <Label>Email professionnel</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@startup.tn"
                />
                {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Mot de passe</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
                </div>

                <div>
                  <Label>Confirmer</Label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div>
                <Label>Numéro de téléphone</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <Label>Adresse</Label>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && <p className="text-xs text-red-600">{errors.address}</p>}
              </div>

              <div>
                <Label>Site web</Label>
                <Input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* INFORMATIONS DE BASE */}
          <section className="card">
            <h2 className="text-lg font-semibold mb-4">Informations de base</h2>

            <div className="space-y-3">
              <div>
                <Label>Nom de la startup</Label>
                <Input
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                />
                {errors.startupName && (
                  <p className="text-xs text-red-600">{errors.startupName}</p>
                )}
              </div>

              <div>
                <Label>Secteur</Label>
                <Input
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                />
                {errors.sector && <p className="text-xs text-red-600">{errors.sector}</p>}
              </div>

              <div>
                <Label>Description</Label>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <p className="text-xs text-red-600">{errors.description}</p>
                )}
              </div>
            </div>
          </section>

          {/* FONDATEUR */}
          <section className="card">
            <h2 className="text-lg font-semibold mb-4">Fondateur / Équipe</h2>

            <div className="space-y-3">
              <div>
                <Label>Nom & prénom</Label>
                <Input
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                />
                {errors.founderName && (
                  <p className="text-xs text-red-600">{errors.founderName}</p>
                )}
              </div>

              <div>
                <Label>Rôle</Label>
                <Input
                  value={founderRole}
                  onChange={(e) => setFounderRole(e.target.value)}
                />
                {errors.founderRole && (
                  <p className="text-xs text-red-600">{errors.founderRole}</p>
                )}
              </div>

              <div>
                <Label>Réseaux sociaux</Label>
                <Input
                  value={socialLinks}
                  onChange={(e) => setSocialLinks(e.target.value)}
                />
              </div>
            </div>
          </section>
        </div>

        {/* CONDITIONS */}
        <div className="flex items-center gap-2 text-sm mt-4">
          <Checkbox
            checked={accept}
            onCheckedChange={(c) => setAccept(!!c)}
          />
          <Label>J’accepte les conditions d’utilisation</Label>
        </div>

        {errors.accept && (
          <p className="text-xs text-red-600">{errors.accept}</p>
        )}

        {/* ERREUR SERVEUR */}
        {errors.server && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-2">
            {errors.server}
          </p>
        )}

        {/* BOUTON */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full mt-4"
        >
          {loading ? 'Création…' : 'Créer ma startup'}
        </button>
      </form>
    </main>
  );
}
