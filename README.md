# Debattoernooi Generator & Optimizer

(📄 Deze README is gegenereerd met hulp van ChatGPT.)

Een JavaScript-experiment om debatrondes te genereren en optimaliseren op basis van een genetisch algoritme. Dit project is bedoeld voor het plannen van een eerlijke en efficiënte indeling van debatrondes tijdens een toernooi, met minimale frictie.

## 🔍 Doel

Dit script helpt bij het automatiseren van ronde-indeling voor debattoernooien, met aandacht voor:

- **Frictie minimaliseren**: 
  - Geen teams van dezelfde school tegen elkaar.
  - Geen herhalingen van eerdere match-ups.
  - Scores en ronden worden eerlijk verdeeld.
- **Jury-allocatie optimaliseren**:
  - Juryleden krijgen wedstrijden toegewezen op basis van belangrijkheid en hun kwaliteitsscore.
  - Vermijden dat juryleden teams jureren die ze al hebben beoordeeld.

## ⚙️ Opbouw

- `index.html`: eenvoudige HTML5-pagina die `main.mjs` laadt.
- `main.mjs`: JavaScript-module waarin de logica van het algoritme ontwikkeld wordt.
- `style.css`: eenvoudige opmaak voor leesbaarheid en gebruik.

## 🚀 Gebruik

1. Open het project in [Visual Studio Code](https://code.visualstudio.com/).
2. Installeer de extensie **Live Server**.
3. Klik met de rechtermuisknop op `index.html` > _Open with Live Server_.
4. Bekijk de output en volg de logica in de browserconsole.

## 📦 Toekomstige uitbreidingen

- Verbetering van het genetisch algoritme.
- Invoer via JSON-bestanden (bijv. met teams, scholen, scores).
- UI voor handmatige aanpassingen.
- Logging en analyse van frictie-statistieken.

## 🧠 Technologie

- JavaScript (ES Modules)
- HTML5 / CSS3
- Geen externe dependencies

## 📁 Projectstructuur

```
debattoernooi-generate-optimize/
├── index.html       # Webpagina
├── main.mjs         # Genetisch algoritme en toernooilogica
├── style.css        # Stijlen
└── README.md        # Documentatie
```

## 👤 Auteur

Ontwikkeld door [Johan Groenen](https://github.com/jgroenen) als exploratie van algoritmische toernooiplanning in een browsercontext.