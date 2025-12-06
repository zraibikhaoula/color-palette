# color-palettekz

## 🇫🇷 Description

Mon premier package npm ! 🎉  
Un petit module Node.js qui fournit de jolies palettes de couleurs : **sakura**, **autumn**, **night**, **garden**, **galaxy**.  
Permet de lister les palettes, d’en récupérer une par nom ou d’en sélectionner une au hasard pour vos projets de design et de développement.

## 🇬🇧 Description

My first npm package! 🎉  
A small Node.js module that provides pretty color palettes: **sakura**, **autumn**, **night**, **garden**, **galaxy**.  
Easily list palettes, fetch one by name, or pick a random palette for design and development projects.

---

## Installation

```bash
npm install color-palettekz
```

---

## Usage

```js
const palettes = require('color-palettekz');

// List all palette names
console.log(palettes.list());
// → ['sakura', 'autumn', 'galaxy', 'garden', 'night']

// Get a palette by name (case-insensitive)
console.log(palettes.get('sakura'));

// Get a random palette
console.log(palettes.random());

// Example output:
// {
//   name: 'sakura',
//   colors: ['#FDDDE6', '#F9B7CF', ...]
// }
```

---

## License

MIT