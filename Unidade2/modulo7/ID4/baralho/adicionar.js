const baralhos = require("./baralhos");

function adicionarBaralho(baralho) {
    baralho.id = baralhos.length + 1;
    baralhos.push(baralho)
}
module.exports = adicionarBaralho