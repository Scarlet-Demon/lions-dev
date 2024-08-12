const usuarios = require("./usuarios");

function listarUsuarios() {
    if (usuarios.length == 0) { 
        console.log('Não A Moradores Cadastrados')
        callback()
    } else {
        usuarios.forEach((usuario) => {
            console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}, Email: ${usuario.email}, Telefone: ${usuario.telefone}`)
        });
    }
}
module.exports = listarUsuarios