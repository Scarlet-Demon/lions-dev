function cadastrar(arte, rl, callback) {
    rl.question('Digite o nome da arte: ', (nome) => {
        rl.question('Digite o autor da arte: ', (artista) => {
            rl.question('Digite a data de criação: ', (criacao) => {
                rl.question('Digite a descrição da arte: ', (descricao) => {
                    rl.question('Digite a categoria da arte: ', (categoria) => {
                        rl.question('Digite o estilo da arte: ', (estilo) => {
                            arte.push({
                                nome: nome,
                                autor: artista,
                                criacao: criacao,
                                descricao: descricao,
                                categoria: categoria,
                                estilo: estilo
                            });
                            console.log('Arte cadastrada com sucesso!');
                            callback();
                        });
                    });
                });
            });
        });
    });
}
module.exports = {cadastrar}