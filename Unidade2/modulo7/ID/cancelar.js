const usuarios = require("./usuarios")

function cancelarUsuario(index) {
    usuarios.splice(index, 1)
}
module.exports = cancelarUsuario