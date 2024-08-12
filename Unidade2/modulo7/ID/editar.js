const usuarios = require("./usuarios")


function editarUsuario(index, novoUsuario) {
    usuarios[index] = novoUsuario
}
module.exports = editarUsuario