const palettes = require('./index.js');

console.log("List:", palettes.list());
console.log("Sakura:", palettes.get("sakura"));
console.log("Random:", palettes.random());