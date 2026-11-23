# Novances — Branche Sud

## Secteur
Expertise comptable, Audit, Conseil — Réseau de cabinets — B2B / Professions libérales

## Client
Koven Agency

## Concept
"Un interlocuteur de proximité. La force du groupe Novances." — Cabinet d'expertise comptable multi-sites, 17 bureaux sur le quart sud-est. La branche Sud couvre la Côte d'Azur.

## Cabinets Sud
- **Bureau de Nice** — Linh NGO, Experte-comptable (couvre Nice + Antibes)
- **Bureau de Mouans-Sartoux** — Mathias d'Andréano, Expert-comptable (couvre Cannes + Mouans-Sartoux) — 4,8/5 Google (23 avis)

## Campagnes Meta Ads (3 verticales × 2 bureaux)
- **M** = Médecins / Professions libérales (CTA cyan)
- **R** = Restaurateurs (CTA orange)
- **P** = Repreneurs (CTA violet)
- Bureaux : Nice (Nice + Antibes), Mouans-Sartoux (Cannes + Grasse + Mouans-Sartoux)

## Charte graphique
- Navy profond : #191462
- Indigo titres : #1e1763
- Cyan/Turquoise CTA : #7ee8d0
- Violet-bleu CTA : #6355e0
- Orange CTA/accent : #f5862b
- Blanc : #FFFFFF
- Gris clair : #f0f0f5
- Police titres : Inter (bold 800)
- Police body : Inter (regular 400)
- Logo : https://novances.fr/wp-content/uploads/sites/2/2025/03/logo_complet.svg (blanc)
- Tagline : "EXPERTISE COMPTABLE, AUDIT, CONSEIL" (orange)
- Slogan : "Rappel sous 48h · Sans engagement"

## Dashboard
- Source : `index.html`
- Déploiement : Vercel (novances-paca.vercel.app)
- Données : Google Sheets multi-blocs (onglet « Novance PACA_Meta », GID 1921068796)
  - Bloc A:P (cols 0-15) : données quotidiennes Meta (date, campagne, ad set, coûts, impressions, clics)
  - Bloc T:W (cols 19-22) : portée mensuelle agrégée (reach dédupliqué)
  - Bloc Z:AD (cols 25-29) : portée mensuelle par ad set
  - Bloc AG:AI (cols 32-34) : leads individuels (created, form name, ad set)
- Leads formulaires : SHEET-J (3 onglets : médecins, restaurateurs, repreneurs) → nom, bureau, ville
- Budget par verticale : coûts réels Meta par ad set (pas prorata)
- Leads comptés depuis bloc AG:AI (pas colonne Meta « On-Facebook leads »)
- Portée depuis blocs T:W et Z:AD (pas somme quotidienne)
