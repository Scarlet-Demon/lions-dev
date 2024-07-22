const { listar } = require('./listar')

function editar(arte, rl, callback) {
    listar(arte)
    rl.question('Digite o número da arte que deseja editar: ', (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < arte.length) {
            rl.question('Digite o novo nome da arte: ', (nome) => {
                rl.question('Digite o novo autor da arte: ', (artista) => {
                    rl.question('Digite a nova data de criação: ', (criacao) => {
                        rl.question('Digite a nova descrição da arte: ', (descricao) => {
                            rl.question('Digite a nova categoria da arte: ', (categoria) => {
                                rl.question('Digite o novo estilo da arte: ', (estilo) => {
                                    arte[index] = {
                                        nome: nome,
                                        autor: artista,
                                        criacao: criacao,
                                        descricao: descricao,
                                        categoria: categoria,
                                        estilo: estilo
                                    };
                                    console.log('Arte editada com sucesso!');
                                    callback();
                                });
                            });
                        });
                    });
                });
            });
        }
    });
}
module.exports = {editar}