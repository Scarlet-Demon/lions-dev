const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let jogo = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
    1. Cadastrar jogo
    2. Listar todo os jogos
    3. Edtar
    4. Remover
    5. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarJogo()
				break
			case '2':
				listarJogos()
				break
			case '3':
                editar()
                break
            case '4':
                remover()
                break
            case '5':
                rl.close()
                break
            default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarJogo() {
	rl.question('Digite o nome do jogo: ', (nome) => {
		rl.question('Digite a empresa do jogo: ', (empresa) => {
			rl.question('Digite o preço do jogo: ', (preço) => {
				jogo.push({ nome: nome, empresa: empresa, preco: preço })
				console.log('Jogo cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarJogos() {
    if(jogo ==''){
    console.log('nenhum Jogo cadastrado')
    exibirMenu()
    }else{
    console.log(jogo)
    exibirMenu()
    }
}

function editar() {
    if(jogo == '') {
        console.log('Jogo não cadastrado')
        exibirMenu()
    } else {
        for (let i = 0; i < jogo.length; i++) {
            console.log(`${i+1}:${jogo[i].nome},${jogo[i].empresa},${jogo[i].preco}`)
        }
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if (numero > 0 && numero <= jogo.length) {
                rl.question('Digite a novo nome: ', (nome) => {
                    rl.question('Digite a nova empresa: ', (empresa) => {
                        rl.question('Digite a novo preço: ', (preco) => {
                            jogo[numero - 1] = {nome,empresa,preco}
                            console.log('editado com sucesso!')
                            exibirMenu()
                        })
                    })
                 })
            } else {
                    console.log('Jogo inválido, tente novamente.')
                    exibirMenu()
            }
        })
    }
}

function remover() {
    if (jogo.length == '') {
        console.log('Nada cadastrado.')
        exibirMenu()
    } else {
        console.log('Lista de elementos')
        jogo.forEach((elemento, i) => {
        console.log(`${i+1}:${jogo[i].nome},${jogo[i].empresa},${jogo[i].preco}`)
        })
            rl.question('Digite o número do elemento que deseja remover:', (numero) => {
                if (numero > 0 && numero <= jogo.length) {
                    jogo.splice(numero - 1, 1)
                    console.log('Elemento removido com sucesso!')
                    exibirMenu()
                }else {
                    console.log('Jogo inválido, tente novamente.')
                    exibirMenu()
                }
        })
    }
}
