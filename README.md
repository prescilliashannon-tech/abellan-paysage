# Abellan Paysage — site vitrine

Site vitrine pour Abellan Paysage, paysagiste concepteur en Occitanie et dans les
Pyrénées-Orientales. Construit avec [Astro](https://astro.build) + Tailwind CSS,
100% statique (pas de backend requis), en français / anglais / espagnol.

## Lancer le projet en local

```sh
npm install
npm run dev
```

Le site est alors visible sur `http://localhost:4321`.

```sh
npm run build    # génère le site statique dans ./dist
npm run preview  # prévisualise le build de production en local
```

## Structure du projet

```
src/
├── components/
│   ├── pages/          → un composant par type de page (HomePage, AboutPage, ...)
│   ├── Header.astro, Footer.astro, LangSwitcher.astro, ProjectCard.astro, IntroAnimation.astro
├── content/projects/    → les réalisations, un fichier .md par projet et par langue
├── i18n/                → routes.ts (URLs par langue) et ui.ts (tous les textes)
├── layouts/Layout.astro → structure HTML commune (head, header, footer)
└── pages/                → les routes réelles (fr à la racine, /en/, /es/)
```

Chaque page existe en 3 langues (FR par défaut sans préfixe, `/en/...`, `/es/...`).
Pour changer un texte, il n'y a presque jamais besoin de toucher au HTML : tout
passe par `src/i18n/ui.ts`.

## ⚠️ Ce qui est encore provisoire (à faire avant mise en ligne)

1. **Photos et vidéos réelles.** Toutes les photos actuelles (`public/images/placeholders/`)
   sont des photos libres de droit (licence Pexels, gratuite y compris usage commercial)
   utilisées uniquement pour visualiser le rendu. **Elles doivent être remplacées par
   les vraies photos d'Abellan Paysage** avant la mise en ligne définitive.
2. **Logo réel.** Le nom "Abellan" dans le header/footer est un texte stylisé, pas un
   logo. Si le client a un logo (la fiche indique que oui), il faudra l'intégrer dans
   `src/components/Header.astro` et `Footer.astro`.
3. **Textes des réalisations.** Les 4 projets dans `src/content/projects/` sont des
   exemples fictifs (Perpignan, Collioure, Roussillon, Argelès-sur-Mer) écrits pour
   montrer la mise en page. À remplacer par les vrais projets du client.
4. **Formulaire de contact.** Le formulaire est prêt techniquement (envoi en AJAX,
   anti-spam, messages de succès/erreur traduits en FR/EN/ES) mais utilise un ID
   Formspree factice tant que le compte n'est pas créé. Voir la section
   [Activer le formulaire de contact](#activer-le-formulaire-de-contact) ci-dessous —
   3 minutes, à faire une seule fois.
5. **Traductions EN/ES.** Les textes anglais et espagnols ont été rédigés pour être
   corrects, mais une relecture par un locuteur natif est recommandée avant mise en ligne.
6. **Tarifs.** La fiche client n'indiquait pas clairement si les tarifs devaient être
   affichés directement. Le site part sur "devis personnalisé sur demande" — à ajuster
   si le client préfère afficher une grille tarifaire.

## Activer le formulaire de contact

Le formulaire utilise [Formspree](https://formspree.io) : un service qui reçoit les
soumissions du formulaire et les transfère par email, sans avoir besoin de serveur ou
de base de données. C'est un compte à créer soi-même (je ne peux pas le créer à ta
place) — la création est gratuite jusqu'à 50 soumissions/mois, largement suffisant
pour démarrer.

1. Va sur [formspree.io](https://formspree.io) et crée un compte (gratuit) avec
   l'adresse qui doit recevoir les demandes de devis : `abellan.paysage@gmail.com`.
2. Dans le tableau de bord Formspree, clique sur **"+ New Form"**, donne-lui un nom
   (ex. "Abellan Paysage — Contact") et valide.
3. Formspree affiche un ID de formulaire : une courte chaîne du type `xanybqrp`.
   Copie-la.
4. Ouvre [`src/config.ts`](src/config.ts) dans le projet et remplace :
   ```ts
   export const FORMSPREE_ID = 'VOTRE_ID_FORMSPREE';
   ```
   par :
   ```ts
   export const FORMSPREE_ID = 'xxxxxxxx'; // ton vrai ID
   ```
5. Sauvegarde. Le formulaire de contact (FR, EN et ES — un seul fichier partagé) est
   alors actif : chaque soumission arrive par email, avec le sujet "Nouvelle demande —
   Abellan Paysage".
6. Formspree envoie un email de confirmation au premier test réel du formulaire — il
   faut cliquer sur le lien de confirmation pour activer définitivement la réception.

Aucune autre modification n'est nécessaire : le champ anti-spam et les messages de
succès/erreur traduits sont déjà en place.

## Déploiement

Le site est 100% statique : il peut être déployé gratuitement sur
[Vercel](https://vercel.com) ou [Netlify](https://netlify.com) en connectant le dépôt
Git (build command `npm run build`, output `dist/`).

## Nom de domaine

Piste retenue : `abellan-paysagiste.fr`. Il n'est pas encore acheté — à réserver chez
un registrar (OVH, Gandi, etc.) puis à connecter à l'hébergeur choisi.
