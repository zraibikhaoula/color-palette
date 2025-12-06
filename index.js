const palettes = require('./palettes.json');

module.exports = {

  list() {
    return palettes.map(p => p.name);
  },

  get(name) {
    return palettes.find(p => p.name.toLowerCase() === name.toLowerCase()) || null;
  },

  random() {
    return palettes[Math.floor(Math.random() * palettes.length)];
  }
};
