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