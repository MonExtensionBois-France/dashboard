# Problemes de donnees a corriger dans Google Sheets / The Sheep

> Ce document liste les problemes identifies dans les sources de donnees des dashboards. Les corrections doivent etre faites directement dans Google Sheets ou dans la configuration The Sheep / Supermetrics.

---

## 1. GIDs non publies (erreur "pub" Google Sheets)

Certains onglets de classeurs Google Sheets ne sont pas publies sur le web. Les dashboards qui les utilisent echouent silencieusement (pas de donnees, pas d'erreur visible).

### SHEET-E (`...XoZUYk8v`) — TOUS les GIDs

| GID | Client | Onglet | Impact |
|-----|--------|--------|--------|
| `1325169406` | Mamie Bigoude | Meta France | Dashboard Mamie Bigoude : pas de donnees Meta nationales |
| `1713978084` | Mamie Bigoude | Google Ads | Dashboard Mamie Bigoude : pas de donnees Google |
| `17155295` | Mamie Bigoude | GA4 | Dashboard Mamie Bigoude : pas de donnees GA4 |
| `1180339242` | Mamie Bigoude | Nimes | Dashboard Mamie Bigoude : pas de donnees Nimes |
| `1619662920` | Mamie Bigoude | Bourges | Dashboard Mamie Bigoude : pas de donnees Bourges |
| `910601949` | Mamie Bigoude | Saint-Malo | Dashboard Mamie Bigoude : pas de donnees Saint-Malo |
| `1269997890` | Mamie Bigoude | Chateauroux | Dashboard Mamie Bigoude : pas de donnees Chateauroux |
| `1667708153` | YUJO Ramen | Meta Ads | Dashboard YUJO : pas de donnees Meta |
| `376592647` | YUJO Ramen | GA4 | Dashboard YUJO : pas de donnees GA4 |
| `66695541` | Mother & Daughter | Meta Ads | Dashboard M&D : pas de donnees Meta |
| `392350086` | Mother & Daughter | GA4 | Dashboard M&D : pas de donnees GA4 |
| `1734203864` | Mother & Daughter | Leads | Dashboard M&D : pas de donnees leads |

**Action requise** : dans Google Sheets, ouvrir le classeur SHEET-E, aller dans Fichier > Partager > Publier sur le Web, et publier chaque onglet individuellement au format CSV.

### SHEET-A (`...MO6OOmn_9`) — GIDs specifiques

| GID | Client | Onglet | Impact |
|-----|--------|--------|--------|
| `0` | Casino | Meta Ads (premier onglet) | Dashboard Casino : pas de donnees Meta |
| `244680110` | Spar | Meta Ads | Dashboard Spar : pas de donnees Meta |
| `1011890354` | Vival | Meta Ads | Dashboard Vival : pas de donnees Meta |

**Action requise** : publier les onglets Casino, Spar et Vival dans SHEET-A.

### SHEET-C (`...cZWw6qXpb`) — GIDs specifiques (Novances)

| GID | Client | Onglet | Impact |
|-----|--------|--------|--------|
| `1212881150` | Novances | Leads Restaurateurs | Dashboard Novances : pas de leads restaurateurs |
| `1610436699` | Novances | Leads Repreneurs | Dashboard Novances : pas de leads repreneurs |
| `1917525205` | Novances | Leads Medecins | Dashboard Novances : pas de leads medecins |

**Note** : ces GIDs sont en realite dans SHEET-J (`...whE-MnL_I`), le classeur propre a Novances. Le probleme de publication reste le meme.

**Action requise** : publier les trois onglets leads dans SHEET-J.

### SHEET-D (`...gPog6Dxx1`) — GID specifique

| GID | Client | Onglet | Impact |
|-----|--------|--------|--------|
| `1579352024` | Bouillon Batignolles | Leads candidats | Dashboard Bouillon : pas de donnees candidats |

**Note** : ce GID est en realite dans SHEET-J (`...whE-MnL_I`). Verifier et publier l'onglet correspondant.

**Action requise** : publier l'onglet leads Bouillon Batignolles.

---

## 2. Erreur de licence LinkedIn Ads

### SHEET-A, GID `339874225` — AS-AGT LinkedIn Ads

**Probleme** : l'onglet LinkedIn Ads du classeur SHEET-A retourne une erreur liee a la licence du connecteur LinkedIn dans The Sheep / Supermetrics. Les donnees LinkedIn ne sont plus remontees.

**Impact** : le dashboard AS-AGT affiche la section Meta Ads correctement, mais la section LinkedIn Ads est vide. Les KPIs globaux (toutes plateformes) sont sous-evalues.

**Action requise** :
1. Verifier le statut de la licence du connecteur LinkedIn Ads dans The Sheep / Supermetrics
2. Renouveler ou reactiver le connecteur si necessaire
3. Verifier que l'onglet GID `339874225` se remplit a nouveau avec les donnees LinkedIn

---

## 3. Inconsistances de nommage des colonnes (FR vs EN)

### Probleme

Les classeurs Google Sheets n'ont pas de convention unique pour la langue des en-tetes de colonnes. Certains onglets utilisent des noms en francais (generes par Supermetrics en mode FR), d'autres en anglais.

### Exemples d'inconsistances constatees

| Colonne FR | Colonne EN | Classeurs concernes |
|------------|-----------|---------------------|
| `Cout (EUR)` | `Cost (EUR)` | SHEET-A, SHEET-C, SHEET-D, SHEET-E |
| `Clics (tous)` | `Clicks (all)` | SHEET-A, SHEET-C, SHEET-D, SHEET-E |
| `Prospects sur Facebook` | `Facebook leads` | SHEET-A, SHEET-C, SHEET-D, SHEET-E |
| `Nom de la campagne` | `Campaign name` | SHEET-A, SHEET-C, SHEET-D, SHEET-E |
| `Portee` | `Reach` | SHEET-A, SHEET-C, SHEET-D |
| `Clics` | `Clicks` | SHEET-B, SHEET-D (Google Ads) |
| `Nom du groupe d'annonces` | `Ad group name` | SHEET-A, SHEET-D (Google Ads) |

### Impact

Les dashboards gerent cette situation via le systeme `COLUMN_ALIASES` (voir `CORRECTIONS-DASHBOARDS.md`). Cependant, cette couche de compatibilite ajoute de la complexite et rend le diagnostic plus difficile quand de nouvelles colonnes apparaissent.

### Action recommandee

Standardiser la langue des en-tetes dans The Sheep / Supermetrics :
- **Option A** (recommandee) : tout passer en anglais dans Supermetrics, puisque les dashboards travaillent en EN en interne
- **Option B** : tout passer en francais et adapter les dashboards (plus de travail)

---

## 4. Autres problemes de qualite des donnees

### 4.1 Valeurs numeriques avec format variable

Certains onglets exportent les nombres avec des virgules comme separateur decimal (`3,45`), d'autres avec des points (`3.45`). Les dashboards gerent cela via `parseFloat(v.replace(',','.'))` mais ce n'est pas ideal.

**Action recommandee** : standardiser le format numerique dans Supermetrics (point comme separateur decimal).

### 4.2 Dates en format variable

La plupart des onglets utilisent le format `YYYY-MM-DD`, mais certains utilisent `DD/MM/YYYY` ou `MM/DD/YYYY`.

**Action recommandee** : forcer le format `YYYY-MM-DD` (ISO 8601) dans tous les connecteurs Supermetrics.

### 4.3 Lignes vides ou doublons dans les exports

Certains onglets contiennent des lignes vides en fin de fichier ou des doublons de lignes (meme date, meme campagne, memes valeurs). Les dashboards filtrent les lignes vides (`skipEmptyLines: true` dans Papa Parse), mais les doublons ne sont pas toujours detectes.

**Action recommandee** : verifier les parametres de deduplication dans The Sheep / Supermetrics.

---

## Resume des actions prioritaires

| Priorite | Action | Impact |
|----------|--------|--------|
| **P0** | Publier tous les onglets de SHEET-E sur le web | 3 clients sans donnees (Mamie Bigoude, YUJO, M&D) |
| **P0** | Publier les onglets Casino/Spar/Vival dans SHEET-A | 3 clients sans donnees Meta |
| **P0** | Publier les onglets leads Novances dans SHEET-J | Novances sans leads |
| **P0** | Publier l'onglet leads Bouillon Batignolles dans SHEET-J | Bouillon sans candidats |
| **P1** | Corriger la licence LinkedIn Ads (SHEET-A, GID 339874225) | AS-AGT sans donnees LinkedIn |
| **P2** | Standardiser la langue des colonnes (FR→EN) dans Supermetrics | Simplification maintenance |
| **P3** | Standardiser les formats numeriques et dates | Robustesse des parseurs |
