const baralhos = require("./baralhos");

function removerBaralho(index) {
    baralhos.splice(index, 1)
    
}
module.exports = removerBaralho