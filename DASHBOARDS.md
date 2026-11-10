# Registre des dashboards — Meta-Advertising / Koven

> **Règle** : toute modification pour un client se fait **uniquement** sur le dashboard de référence listé ci-dessous. Aucune copie n'est créée. Les doublons historiques ont été archivés ou supprimés.

## Classeurs Google Sheets (données The Sheep / Supermetrics)

| Alias | Pub ID (suffixe) | Clients | Langue colonnes |
|-------|-------------------|---------|-----------------|
| SHEET-A | `...O6OOmn_9` | Toa Sushi, AS-AGT, Histoires d'ô, Flash Repair, Crying Tiger, Olla, Casino, Spar, Vival | FR ou EN selon onglet |
| SHEET-B | `...EWMTmrsc` | Sooner, Forum des images, Le Pacte, Detect Réseaux | EN |
| SHEET-C | `...ZWw6qXpb` | Franchise Board, Le DUO, Body House recrutement, Odygo, Hapik, Novances, Écrin Végétal, By Pauline, Five Pizza | FR ou EN selon onglet |
| SHEET-D | `...Pog6Dxx1` | Moulin d'Elise, ôCargo, Impact Accelerator, Le 17.45, LRDM, Dropdrone, Detect Réseaux, Bistrot de Villages, Bouillon Batignolles | FR ou EN selon onglet |
| SHEET-E | `...XoZUYk8v` | Mamie Bigoude, Mother & Daughter, YUJO, Escapad | FR ou EN selon onglet |
| SHEET-F | `...1FHVjdzD` | Body House (boutiques multi-villes) | FR |
| SHEET-G | `...XWcqfGlR` | Exteco (toutes villes), MEB (toutes villes) | FR |
| SHEET-H | `...OqMVaFMYFFqe...` | Body House Ecommerce | FR |
| SHEET-I | `...aNKcihjZo...` | Casino (leads), Spar (leads), Vival (leads) | FR |
| SHEET-J | `...whE-MnL_I` | Novances (propre sheet leads) | FR |
| SHEET-SC | `1t0PemB4...Q7j1Y` (gviz) | Stock Cuisines | FR |

## Dashboards de référence

### Clients Meta-Advertising

| Client | Fichier de référence | Plateforme | URL | Classeur(s) | GID(s) | Colonnes | Statut |
|--------|---------------------|------------|-----|-------------|--------|----------|--------|
| Five Pizza Original | `clients/meta/five-pizza/index.html` | Vercel | five-pizza-original.vercel.app | SHEET-C | — | EN (alias FR→EN) | Actif |
| Écrin Végétal | `clients/meta/ecrin-vegetal/index.html` | Vercel | ecrin-vegetal.vercel.app | SHEET-C | — | EN (alias FR→EN) | Actif |
| Franchise Board | `clients/meta/franchise-board/dashboard.html` | Vercel | franchise-board.vercel.app | SHEET-C | — | EN (alias FR→EN) | Actif |
| Le DUO | `clients/meta/le-duo/index.html` | Vercel | le-duo.vercel.app | SHEET-C | — | EN (alias FR→EN) | Actif |
| Body House recrutement | `clients/meta/bodyhouse/recrutement/index.html` | Vercel | recrutement.vercel.app | SHEET-C | — | EN (alias FR→EN) | Actif |
| Odygo | `clients/meta/odygo/dashboard.html` | Vercel | odygo.vercel.app | SHEET-C | — | EN (alias FR→EN) | Actif |
| Hapik | `clients/meta/hapik/index.html` | Vercel | hapik.vercel.app | SHEET-C | — | EN (alias FR→EN) | Actif |
| By Pauline | `clients/meta/by-pauline/index.html` | Vercel | by-pauline.vercel.app | SHEET-C | gid=1876974027 (Meta), gid=26385842 (GA4) | EN (alias FR→EN) | Actif |
| Sooner | `clients/meta/sooner/dashboard-sooner.html` | GitHub Pages | sooner-france.github.io/dashboard/dashboard-sooner.html | SHEET-B | — | EN | Actif |
| Forum des images | `clients/meta/forum-des-images/dashboard.html` | — | — | SHEET-B | — | EN (alias FR→EN) | Actif |
| Le Pacte | `clients/meta/le-pacte/index.html` | Vercel | le-pacte.vercel.app | SHEET-B | — | EN (alias FR→EN) | Actif |
| Detect Réseaux | `clients/meta/detect-reseaux/index.html` | Vercel | detect-reseaux.vercel.app | SHEET-B, SHEET-D | — | EN (alias FR→EN) | Actif |
| Impact Accelerator | `clients/meta/impact-accelerator/index.html` | Vercel | impact-accelerator.vercel.app | SHEET-D | — | EN (alias FR→EN) | Actif |
| Le 17.45 | `clients/meta/le-1745/index.html` | Vercel | le-1745.vercel.app | SHEET-D | — | EN (alias FR→EN) | Actif |
| LRDM | `clients/meta/le-roi-du-matelas/index.html` | Vercel | le-roi-du-matelas.vercel.app | SHEET-D | — | EN (alias FR→EN) | Actif |
| Dropdrone | `clients/meta/dropdrone/index.html` | Vercel | dropdrone.vercel.app | SHEET-D | — | EN (alias FR→EN) | Actif |
| Bistrot de Villages | `clients/meta/bistrot-de-villages/index.html` | Vercel | bistrot-de-villages.vercel.app | SHEET-D | gid=53108943 | EN (alias FR→EN) | Actif |
| Bouillon Batignolles | `clients/meta/bouillon-batignolles/index.html` | Vercel | bouillon-batignolles.vercel.app | SHEET-D, SHEET-J | gid=2145326715 (Meta), gid=1579352024 (leads) | EN (alias FR→EN) | Actif |
| Moulin d'Elise (national) | `clients/meta/moulin-elise/index.html` | GitHub Pages | moulindelise-france.github.io/... | SHEET-D | — | EN (alias FR→EN) | Actif |
| Moulin d'Elise (Carquefou) | `clients/meta/moulin-elise/dashboard-moulin-carquefou.html` | GitHub Pages | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| Moulin d'Elise (Saint-Brieuc) | `clients/meta/moulin-elise/dashboard-moulin-saintbrieuc.html` | GitHub Pages | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| Moulin d'Elise (Paimpol) | `clients/meta/moulin-elise/dashboard-moulin-paimpol.html` | GitHub Pages | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| Moulin d'Elise (Langueux) | `clients/meta/moulin-elise/dashboard-moulin-langueux.html` | GitHub Pages | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| ôCargo (National) | `clients/meta/ocargo/dashboard-national.html` | — | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| ôCargo (Aix) | `clients/meta/ocargo/dashboard-aix.html` | — | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| ôCargo (Avignon) | `clients/meta/ocargo/dashboard-avignon.html` | — | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| ôCargo (Bessan) | `clients/meta/ocargo/dashboard-bessan.html` | — | — | SHEET-D | — | EN (alias FR→EN) | Actif |
| Mamie Bigoude | `clients/meta/mamie-bigoude/MamieBigoude-dashboard/index.html` | GitHub Pages | mamiebigoude.github.io/... | SHEET-E | gid=1325169406 (FR Meta), 1713978084 (Google), 17155295 (GA4), 1180339242 (Nimes), 1619662920 (Bourges), 910601949 (Saint-Malo), 1269997890 (Chateauroux) | EN (alias FR→EN) | Actif |
| Mother & Daughter | `clients/meta/mother-daughter/index.html` | — | — | SHEET-E | gid=66695541 (Meta), 392350086 (GA4), 1734203864 (leads) | EN (alias FR→EN) | Actif |
| YUJO Ramen | `clients/meta/yujo-ramen/index.html` | Vercel | yujo-ramen.vercel.app | SHEET-E | gid=1667708153 (Meta), 376592647 (GA4) | EN (alias FR→EN) | Actif |
| Escapad | `clients/meta/escapad/index.html` | Vercel | escapad-dashboard.vercel.app | SHEET-E | gid=1347913954 (Meta), 1283782540 (Google), 2059473408 (TikTok), 256908481 (GA4) | EN (alias FR→EN) | Actif |
| AS-AGT | `clients/meta/as-agt/ASAGT-dashboard/index.html` | GitHub Pages | asagt.github.io/... | SHEET-A | gid=1597510134 (Meta), 339874225 (LinkedIn) | EN (alias FR→EN) | Actif |
| Histoires d'ô | `clients/meta/histoires-do/HistoiresDo-dashboard/index.html` | GitHub Pages / Vercel | histoires-do-dashboard.vercel.app | SHEET-A | — | EN (alias FR→EN) | Actif |
| Flash Repair | `clients/meta/flash-repair/dashboard.html` | — | — | SHEET-A | — | EN (alias FR→EN) | Actif |
| Crying Tiger | `clients/meta/crying-tiger/dashboard.html` | — | — | SHEET-A | — | EN (alias FR→EN) | Actif |
| Olla | `clients/meta/olla/dashboard.html` | — | — | SHEET-A | — | EN (alias FR→EN) | Actif |
| Casino | `clients/meta/casino/index.html` | Vercel | casino-dashboard.vercel.app | SHEET-A, SHEET-I | gid=1832497913 (Meta sur SHEET-A), gid=0 (leads sur SHEET-I) | EN (alias FR→EN) | Actif |
| Spar | `clients/meta/spar/index.html` | Vercel | spar-dashboard.vercel.app | SHEET-A, SHEET-I | — | EN (alias FR→EN) | Actif |
| Vival | `clients/meta/vival/index.html` | Vercel | vival-dashboard.vercel.app | SHEET-A, SHEET-I | — | EN (alias FR→EN) | Actif |
| Body House (multi-boutiques) | `clients/meta/bodyhouse/bodyhouse-dashboard/index.html` | Vercel | bodyhouse-dashboard.vercel.app | SHEET-F | — | EN (alias FR→EN) | Actif |
| Body House (Villefranche) | `clients/meta/bodyhouse/villefranche/index.html` | Vercel | bodyhouse-villefranche.vercel.app | SHEET-F | — | EN (alias FR→EN) | Actif |
| Body House (boutique unique) | `clients/meta/bodyhouse/bodyhouse-dashboard/boutique.html` | Vercel | bodyhouse-dashboard.vercel.app/boutique.html | SHEET-F | — | EN (alias FR→EN) | Actif |
| Body House Ecommerce | `clients/meta/bodyhouse/bodyhouse-ecommerce/index.html` | Vercel | — | SHEET-H | — | EN (alias FR→EN) | Actif |
| Stock Cuisines | `clients/meta/stock-cuisines/index.html` | Vercel | stock-cuisines.vercel.app | SHEET-SC | — | FR | Actif |

### Clients Koven

| Client | Fichier de référence | Plateforme | URL | Classeur(s) | GID(s) | Colonnes | Statut |
|--------|---------------------|------------|-----|-------------|--------|----------|--------|
| Toa Sushi | `clients/koven/toa-sushi/dashboard-toa-sushi.html` | GitHub Pages | toa-sushi.github.io/... | SHEET-A | — | EN (alias FR→EN) | Actif |
| Novances | `clients/koven/novances/index.html` | Vercel | novances-paca.vercel.app | SHEET-C, SHEET-J | gid=1921068796 (Meta sur SHEET-C), gid=1917525205 (leads Medecins), 1212881150 (leads Restaurateurs), 1610436699 (leads Repreneurs) sur SHEET-J | EN (alias FR→EN) | Actif |

### Exteco (toutes villes — classeur SHEET-G)

| Ville | Fichier de référence | Plateforme | Statut |
|-------|---------------------|------------|--------|
| Cannes | `clients/meta/exteco/Exteco-Cannes/index.html` | Vercel | Actif |
| Chalon | `clients/meta/exteco/Exteco-Chalon/index.html` | Vercel | Actif |
| Epinal | `clients/meta/exteco/Exteco-Epinal/index.html` | Vercel | Actif |
| Metz | `clients/meta/exteco/Exteco-Metz/index.html` | Vercel | Actif |
| Montauban | `clients/meta/exteco/Exteco-Montauban/index.html` | Vercel | Actif |
| Montbeliard | `clients/meta/exteco/Exteco-Montbeliard/index.html` | Vercel | Actif |
| Montelimar | `clients/meta/exteco/Exteco-Montelimar/index.html` | Vercel | Actif |
| Nancy | `clients/meta/exteco/Exteco-Nancy/index.html` | Vercel | Actif |
| Les Sables | `clients/meta/exteco/Exteco-Sables/index.html` | Vercel | Actif |
| Toulouse | `clients/meta/exteco/Exteco-Toulouse/index.html` | Vercel | Actif |
| Vesoul | `clients/meta/exteco/Exteco-Vesoul/index.html` | Vercel | Actif |
| Portail | `clients/meta/exteco/Exteco-Portail/index.html` | GitHub Pages | Actif |
| Creas | `clients/meta/exteco/exteco-creas/index.html` | — | Actif |

### MEB — Mon Extension Bois (toutes villes — classeur SHEET-G)

| Ville | Fichier de référence | Plateforme | Statut |
|-------|---------------------|------------|--------|
| National | `clients/meta/meb/MEB-National/index.html` | GitHub Pages | Actif |
| Arras | `clients/meta/meb/MEB-Arras/index.html` | GitHub Pages | Actif |
| Cambrai | `clients/meta/meb/MEB-Cambrai/index.html` | GitHub Pages | Actif |
| Franchise | `clients/meta/meb/MEB-Franchise/index.html` | GitHub Pages | Actif |
| La Rochelle | `clients/meta/meb/MEB-LaRochelle/index.html` | GitHub Pages | Actif |
| Lille | `clients/meta/meb/MEB-Lille/index.html` | GitHub Pages | Actif |
| Metz | `clients/meta/meb/MEB-Metz/index.html` | GitHub Pages | Actif |
| Vosges | `clients/meta/meb/meb-vosges/index.html` | Vercel | Actif |
| Creas | `clients/meta/meb/meb-creas/index.html` | — | Actif |

## Doublons identifies et traitement

| Client | Doublon | Reference | Action |
|--------|---------|-----------|--------|
| Exteco (toutes villes) | `dashboard-exteco-*.html` (racine exteco/) | `Exteco-*/index.html` | Supprimer les anciens dashboard-*.html |
| MEB (toutes villes) | `dashboard-meb-*.html` (racine meb/) | `MEB-*/index.html` | Supprimer les anciens dashboard-*.html |
| AS-AGT | `dashboard-asagt.html` | `ASAGT-dashboard/index.html` | Supprimer l'ancien |
| Histoires d'o | `dashboard-histoiresdo.html` | `HistoiresDo-dashboard/index.html` | Supprimer l'ancien |
| Mamie Bigoude | `dashboard-mamiebigoude.html` | `MamieBigoude-dashboard/index.html` | Supprimer l'ancien |
| Body House Ecommerce | `bodyhouse-dashboard/ecommerce/index.html` | `bodyhouse-ecommerce/index.html` | Supprimer le doublon dans bodyhouse-dashboard/ |
| Portail Body House | `/portail-bodyhouse.html` (racine) | `clients/meta/bodyhouse/portail-bodyhouse.html` | Supprimer la copie racine |
| Le 17.45 | `v1-carte.html`, `v2-magazine.html` | `index.html` | Archiver les anciennes versions |
| Exteco old | `dashboard-exteco-chalon-le-creusot.html`, `dashboard-exteco-mont-limar.html`, `dashboard-exteco-vesoul-besan-on.html` | Versions corrigees dans Exteco-*/ | Supprimer (noms mal encodes) |
| Sooner | `index.html`, `portail-sooner.html` | `dashboard-sooner.html` | index.html et portail sont des hero pages, pas des doublons |
