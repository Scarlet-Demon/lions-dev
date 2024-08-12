const usuarios = require("./usuarios");

function cadastrarUsuario(usuario) {
    usuario.id = usuarios.length + 1;
    
    let jaExiste = usuarios.find(user => user.email === usuario.email);
    if (jaExiste) {
    throw new Error('Já existe um contato com esse email');
    } else {
    usuarios.push(usuario);
    }
}
module.exports = cadastrarUsuario