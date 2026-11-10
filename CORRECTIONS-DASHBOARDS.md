# Corrections appliquees aux dashboards

> Document de reference decrivant les systemes de correction deployes dans les dashboards Meta-Advertising et Koven.

## 1. Systeme d'alias de colonnes (COLUMN_ALIASES)

### Probleme

Les donnees exportees par The Sheep / Supermetrics dans Google Sheets utilisent un melange de noms de colonnes en francais et en anglais. Certains onglets ont des en-tetes en francais (`Cout (EUR)`, `Clics (tous)`, `Prospects sur Facebook`), d'autres en anglais (`Cost (EUR)`, `Clicks (all)`, `Facebook leads`). Cette inconsistance provoquait des colonnes vides ou des erreurs silencieuses dans les dashboards.

### Solution

Chaque dashboard inclut un objet `COLUMN_ALIASES` qui mappe les noms francais vers leurs equivalents anglais. Le code interne travaille exclusivement en anglais ; les alias assurent la compatibilite quelle que soit la langue de la source.

### Alias standards deployes

| Colonne FR (source) | Colonne EN (cible interne) |
|---------------------|---------------------------|
| `Nom de la campagne` | `Campaign name` |
| `Nom de l'ensemble de publicites` | `Ad set name` |
| `Nom de la publicite` | `Ad name` |
| `Nom du groupe d'annonces` | `Ad group name` |
| `Cout (EUR)` | `Cost (EUR)` |
| `Portee` | `Reach` |
| `Clics (tous)` | `Clicks (all)` |
| `CTR (tous)` | `CTR (all)` |
| `Frequence` | `Frequency` |
| `CPM (cout pour 1000 impressions)` | `CPM` |
| `Prospects sur Facebook` | `Facebook leads` |
| `Cout par prospect sur Facebook` | `Cost per lead` |
| `J'aime la page` | `Page likes` |
| `Commentaires sur les publications` | `Post comments` |
| `Reactions aux publications` | `Post reactions` |
| `Partages de publications` | `Post shares` |
| `Enregistrements de publications` | `Post saves` |
| `Cout par conversion` | `Cost per conversion` |
| `Clics` | `Clicks` |
| `Clics sur les liens` | `Link clicks` |
| `URL de la miniature de la creation` | `Ad creative thumbnail URL` |
| `URL de l'image de la creation` | `Ad creative image URL` |

### Fonctionnement technique

```javascript
// 1. Objet de mapping FR → EN
var COLUMN_ALIASES = { 'Cout (EUR)': 'Cost (EUR)', ... };

// 2. Normalisation d'une ligne
function normalizeRow(row) {
  var out = {};
  for (var k in row) {
    if (!row.hasOwnProperty(k)) continue;
    var nk = COLUMN_ALIASES[k] || k;  // alias ou nom original
    out[nk] = row[k];
  }
  return out;
}

// 3. Normalisation conditionnelle (ne s'execute que si necessaire)
function normalizeRows(rows) {
  if (!rows || !rows.length) return rows;
  var sample = rows[0], needsNorm = false;
  for (var k in sample) { if (COLUMN_ALIASES[k]) { needsNorm = true; break; } }
  if (!needsNorm) return rows;
  return rows.map(normalizeRow);
}
```

### Dashboards equipes

Tous les dashboards actifs listés dans `DASHBOARDS.md` incluent ce systeme. Les seuls fichiers sans `COLUMN_ALIASES` sont les portails (qui n'affichent pas de donnees CSV) et les pages hero/creas.

---

## 2. Cache-buster (`_t=Date.now()`)

### Probleme

Google Sheets publie les CSV avec des en-tetes de cache HTTP agressifs. Les navigateurs (et certains CDN) servaient des donnees obsoletes pendant des heures apres une mise a jour dans The Sheep.

### Solution

Chaque requete fetch vers Google Sheets ajoute un parametre `_t=` avec un timestamp unique :

```javascript
// Avec Papa Parse
Papa.parse(BASE + '/pub?gid=' + gid + '&single=true&output=csv&_t=' + Date.now(), { ... });

// Avec fetch
fetch(META_URL + '&_t=' + Date.now()).then(function(r) { return r.text(); })
```

Le parametre `_t` n'est pas lu par Google Sheets mais force le navigateur a traiter chaque requete comme unique, contournant ainsi le cache.

### Dashboards equipes

Tous les dashboards actifs utilisent ce pattern. La syntaxe varie legerement :
- `'&_t='+Date.now()` — forme la plus courante
- `var bust='&_t='+Date.now()` — variable reutilisee (Five Pizza, etc.)
- `var _t='&_t='+Date.now()` — variable partagee entre plusieurs fetch (Novances)

---

## 3. Systeme d'avertissement de colonnes manquantes

### Probleme

Quand une colonne attendue est absente des donnees (renommage dans The Sheep, erreur d'export, changement de connecteur), le dashboard affichait silencieusement des valeurs vides ou `NaN`. Le diagnostic etait difficile sans ouvrir la console.

### Solution

Un systeme a trois couches :

#### a) `safeCol(row, col)` — lecture securisee

```javascript
var _missingCols = {};
function safeCol(row, col) {
  if (row && col in row) return row[col];
  if (!_missingCols[col]) {
    _missingCols[col] = true;
    console.warn('⚠️ Colonne manquante: ' + col);
  }
  return '';
}
```

- Retourne la valeur si la colonne existe
- Retourne une chaine vide (pas d'erreur) si la colonne manque
- Logue l'avertissement en console **une seule fois** par colonne manquante

#### b) `showMissingWarning()` — banniere visuelle

```javascript
function showMissingWarning() {
  var cols = Object.keys(_missingCols);
  if (!cols.length) return;
  var d = document.createElement('div');
  d.style.cssText = 'position:fixed;top:0;left:0;right:0;padding:8px 16px;'
    + 'background:#f59e0b;color:#000;font:13px/1.4 sans-serif;'
    + 'text-align:center;z-index:99999;';
  d.textContent = '⚠️ ' + cols.length + ' colonne(s) manquante(s) dans les donnees : '
    + cols.join(', ');
  document.body.appendChild(d);
  setTimeout(function() { d.remove() }, 15000);
}
```

- Affiche une banniere jaune en haut de page pendant 15 secondes
- Liste toutes les colonnes manquantes
- Visible sans ouvrir la console, utile pour le diagnostic rapide

#### c) Appel apres chargement

`showMissingWarning()` est appelée apres le chargement complet des donnees, une fois que toutes les sources CSV ont ete traitees.

### Dashboards equipes

Le systeme complet (`safeCol` + `showMissingWarning`) est deploye sur tous les dashboards actifs qui consomment des donnees CSV.

---

## 4. Resume des corrections par dashboard

| Dashboard | Alias FR→EN | Cache-buster | Warning colonnes | Corrections specifiques |
|-----------|:-----------:|:------------:|:----------------:|------------------------|
| Escapad | oui | oui | oui | Fusion lignes par date, filtre dates inline |
| Mamie Bigoude | oui | oui | oui | Multi-restos (7 GIDs), vues par ville |
| YUJO Ramen | oui | oui | oui | Meta + GA4 |
| Mother & Daughter | oui | oui | oui | Meta + GA4 + leads |
| Casino | oui | oui | oui | Filtre BRAND_PREFIX `GC_CASINO`, double source (Meta + leads) |
| Spar | oui | oui | oui | Filtre BRAND_PREFIX, double source |
| Vival | oui | oui | oui | Filtre BRAND_PREFIX, double source |
| AS-AGT | oui | — | — | Meta + LinkedIn Ads (2 sources) |
| Novances | oui | oui | oui | Meta + 3 sources leads (Medecins, Restaurateurs, Repreneurs) |
| Bouillon Batignolles | oui | oui | oui | Meta + leads candidats |
| Five Pizza | oui | oui | oui | — |
| Ecrin Vegetal | oui | oui | oui | — |
| Franchise Board | oui | oui | oui | — |
| Le DUO | oui | oui | oui | — |
| Body House recrutement | oui | oui | oui | — |
| Odygo | oui | oui | oui | — |
| Hapik | oui | oui | oui | — |
| By Pauline | oui | oui | oui | Meta + GA4 |
| Sooner | — | — | oui | Pas d'alias (donnees deja en EN) |
| Forum des images | oui | oui | oui | — |
| Le Pacte | oui | oui | oui | — |
| Detect Reseaux | oui | oui | oui | Double source (SHEET-B + SHEET-D) |
| Impact Accelerator | oui | oui | oui | Multi-GIDs |
| Le 17.45 | oui | oui | oui | B2C + leads |
| LRDM | oui | oui | oui | — |
| Dropdrone | oui | oui | oui | Meta + GA4 + Quimper + Rennes |
| Bistrot de Villages | oui | oui | oui | — |
| Histoires d'o | oui | oui | oui | — |
| Flash Repair | oui | oui | oui | — |
| Crying Tiger | oui | oui | oui | — |
| Olla | oui | oui | oui | — |
| Body House (multi) | oui | oui | oui | Multi-boutiques |
| Body House (Villefranche) | oui | oui | oui | — |
| Body House Ecommerce | oui | oui | oui | — |
| Stock Cuisines | oui | oui | oui | Source gviz (pas CSV standard) |
| Toa Sushi | oui | oui | oui | — |
| Exteco (11 villes) | oui | oui | oui | — |
| MEB (8 villes) | oui | oui | oui | — |
| Moulin d'Elise (5 fichiers) | oui | oui | oui | — |
| oCargo (4 fichiers) | oui | oui | oui | — |
