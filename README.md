# Portfolio BUT R&T S4 — Rayan SAOUD

Portfolio de 2e année (parcours DevCloud), attestant des 5 compétences à travers les SAÉ, projets et l'expérience professionnelle.

## Contenu

```
index.html                      → page d'accueil (présentation, 5 compétences, SAÉ, parcours, CV FR+EN, contact)
competences/
  administrer.html              → Administrer les réseaux et l'Internet
  connecter.html                → Connecter les entreprises et les usagers
  programmer.html               → Créer des outils et applications (OnionRouter)
  orchestrer.html               → Coordonner des infrastructures modulaires
  developper.html               → Accompagner le développement d'applications
assets/css/style.css            → thème "infrastructure réseau"
assets/js/main.js               → nav mobile, reveal au scroll, onglets CV
```

Chaque page de compétence suit la structure du critère d'évaluation :
**Contexte (5W) → Actions/traces/preuves → SAÉ rattachée → Lien avec le référentiel → Réflexivité.**

## Déployer sur GitHub Pages (≈ 2 min)

Option simple — remplacer le contenu de ton dépôt `Portfolio` existant :

1. Sauvegarde ton ancien portfolio (branche ou copie) si tu veux le garder.
2. Copie tous ces fichiers à la racine du dépôt `Ryn-s/Portfolio`.
3. Commit + push :
   ```bash
   git add .
   git commit -m "Portfolio S4 - 5 compétences DevCloud"
   git push
   ```
4. GitHub Pages se met à jour automatiquement. Ton URL reste :
   `https://ryn-s.github.io/Portfolio/`

> Si tu préfères ne pas écraser l'ancien, crée un nouveau dépôt (ex. `Portfolio-S4`)
> et active Pages dans *Settings → Pages → Branch: main*.

## À personnaliser avant de rendre

- **Liens contact** : vérifie LinkedIn/GitHub dans `index.html` (déjà pré-remplis).
- **Captures d'écran** : tu peux ajouter tes propres captures (EVE-NG, configs, GUI OnionRouter)
  dans `assets/` et les insérer dans les blocs `.evidence` pour renforcer les preuves —
  la grille valorise les illustrations.
- **CV PDF** : si tu veux un bouton de téléchargement, dépose ton PDF dans `assets/`
  et ajoute un lien dans la section CV.

## Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## CV PDF

Un CV PDF (FR page 1, EN page 2) est inclus dans `assets/cv/CV_Rayan_SAOUD.pdf`
et téléchargeable directement depuis la section CV du site.

## Schémas d'architecture (preuves visuelles)

Quatre diagrammes SVG sont inclus dans `assets/img/` et intégrés dans les pages compétences :
- `topologie-multisite.svg` — réseau multi-sites MPLS-VPN (Administrer, Connecter)
- `archi-microservices.svg` — application bancaire en microservices (Développer, Orchestrer)
- `archi-onionrouter.svg` — architecture OnionRouter (Programmer)
- `firewall-raspberry.svg` — pare-feu Raspberry Pi (Administrer)

Les schémas sont complétés par de **vraies captures d'écran** du labo, dans
`assets/img/captures/` : fichier de zone DNS, DNSSEC (NSEC3/RRSIG), services en
écoute (ss -tulpn), règles iptables, infra Linux/Windows QEMU, maquette EVE-NG,
et le diagramme de Gantt réel. Ces captures portent un badge « capture réelle »
et constituent les preuves authentiques attendues par la grille.

## Fiches SAÉ (Bilan d'une SAÉ — exercice du cours)

Une page `competences/fiches-sae.html` présente les 3 fiches demandées par l'exercice
« Bilan d'une SAÉ » du cours, pour la SAÉ bancaire microservices :
fiche de suivi (avant), journal de bord (pendant), fiche synthèse (après).
Un PDF téléchargeable est inclus : `assets/cv/Fiches_SAE_RayanSAOUD.pdf`.

> Le journal de bord est rédigé à la première personne et calé sur le vrai diagramme
> de Gantt (dates + répartition Rayan/Tom). Relis-le et ajuste le moindre détail
> technique pour qu'il colle exactement à ton souvenir du projet.
