const usuarios = require("./usuarios");

function cadastrarUsuario(usuario) {
    
    let jaExiste = usuarios.find(user => user.email === usuario.email);
    if (jaExiste) {
    return false
    } else {
    usuarios.push(usuario);
    return true
    }
}
module.exports = cadastrarUsuario