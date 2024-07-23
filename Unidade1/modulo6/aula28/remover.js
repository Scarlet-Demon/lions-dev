const { listar } = require('./listar')

function remover(arte, rl, callback) {
    listar(arte)
    rl.question('Digite o número da arte que deseja remover: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < arte.length) {
            arte.splice(index, 1);
            console.log('Arte removida com sucesso!');
            callback();
        }
    });
}
module.exports = {remover}