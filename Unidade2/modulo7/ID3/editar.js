const usuarios = require("./usuarios")

function editarUsuario(index, novoUsuario) { 
    usuarios[index] = novoUsuario

    let jaExiste = usuarios.find(user => user.email === novoUsuario.email);
    if (jaExiste) {
    return false
    } else {
    usuarios.push(novoUsuario);
    return true
    }
}

module.exports = editarUsuario