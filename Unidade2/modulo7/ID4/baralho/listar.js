const baralhos = require("./baralhos");

function listarBaralho() {
    for (let i = 0; i < baralhos.length; i++) {
        const baralho = baralhos[i];
        console.log(`
        Id: ${baralho.id},
        Titúlo: ${baralho.titulo},
        `);
    }
}
module.exports = listarBaralho