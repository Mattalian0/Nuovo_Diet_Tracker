# New Project Diet v2

Piano alimentare personalizzato con calcolo automatico macro e generazione pasti.

## Funzionalita

- **Profilo utente**: sesso, eta, altezza, peso, livello attivita
- **Calcolo automatico** BMR, TDEE e target macro (Surplus/Mantenimento/Deficit)
- **Target ON/OFF separati**: macro diversi per giorni di allenamento (ON) e riposo (OFF)
- **Generazione piano pasti** giornaliero e settimanale con rispetto dei target
- **Sostituzioni alimenti** equivalenti con fattori di conversione
- **Drag & drop** per riordinare alimenti tra pasti
- **Donut charts** nella barra sticky con progresso macro in tempo reale
- **Esporta PDF** del piano pasti
- **Gestione database alimenti** (aggiungi/modifica/elimina)
- **Tracker manuale** con Work Day / Rest Day / Test Day
- **PWA**: installabile su smartphone come app nativa
- **Offline**: funziona senza connessione internet
- **Dati salvati** in localStorage (nessun server richiesto)

## Installazione su Smartphone

### Metodo 1: GitHub Pages (consigliato)

1. Fai il fork o carica questo repo su GitHub
2. Vai su **Settings > Pages**
3. Seleziona **Source: Deploy from a branch** > **Branch: main** > **/ (root)**
4. Clicca **Save**
5. Dopo qualche minuto, il sito sara disponibile su `https://tuousername.github.io/new-project-diet/`
6. Apri il link dal cellulare:
   - **Android**: tocca il banner "Aggiungi alla schermata Home" oppure menu (tre puntini) > "Installa app"
   - **iPhone**: tocca il pulsante Condividi (quadrato con freccia) > "Aggiungi alla schermata Home"

### Metodo 2: Locale

```bash
# Clona il repo
git clone https://github.com/tuousername/new-project-diet.git
cd new-project-diet

# Avvia un server locale
python3 -m http.server 8080

# Apri nel browser
# http://localhost:8080
```

## Struttura Progetto

```
new-project-diet/
  index.html      # App principale (HTML + CSS + JS tutto in un file)
  manifest.json   # Manifest PWA per installazione mobile
  sw.js           # Service Worker per funzionamento offline
  icons/          # Icone app in varie dimensioni (72-512px)
  README.md       # Questo file
```

## Tecnologie

- HTML5 / CSS3 / JavaScript vanilla
- Progressive Web App (PWA)
- Service Worker per cache offline
- localStorage per persistenza dati
- SVG per grafici donut
- Zero dipendenze esterne

## Note

- Tutti i dati sono salvati localmente nel browser (localStorage)
- Nessun dato viene inviato a server esterni
- L'app funziona completamente offline dopo la prima visita
- Compatibile con Chrome, Safari, Firefox, Edge (mobile e desktop)
