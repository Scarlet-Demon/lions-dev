const baralhos = require('./baralhos');

function adicionarBaralho(baralho) {
    // Verifica se o array baralhos está vazio para definir o primeiro ID como 1
    baralho.id = baralhos.length > 0 ? baralhos[baralhos.length - 1].id + 1 : 1;
    baralhos.push(baralho);
}

module.exports = adicionarBaralho;
