const readline = require('readline')
const adiciona = require('./adicionar')
const lista = require('./listar')
const edita = require('./editar')
const remove = require('./remover')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arte = [];
exibirMenu()


function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar arte
    2. Listar todas as artes
    3. Editar arte
    4. Remover arte
    5. Sair
    `);

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adiciona.cadastrar(arte,rl,exibirMenu);
                break;
            case '2':
                lista.listar(arte);
                exibirMenu()
                break;
            case '3':
                edita.editar(arte,rl,exibirMenu);
                break;
            case '4':
                remove.remover(arte,rl,exibirMenu);
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                exibirMenu();
                break;
        }
    });
}

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

function listar(arte) {
    if (arte.lenght) {
        console.log('Nenhuma arte cadastrado')
    } else {
        console.log('arte:')
        arte.forEach((arte, index) => {
            console.log(`${index + 1}. ${arte.nome} - ${arte.autor} - ${arte.criacao} - ${arte.descricao} - ${arte.categoria} - ${arte.estilo}`)
        });
    }
}

module.exports = {listar}

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