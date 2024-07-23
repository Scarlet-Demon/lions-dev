const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
    1. Cadastrar funcionário
    2. Listar todo os funcionarios
    3. Exibir qual o salario maior dos funcionartios
    4. Editar
    5. Remover
    6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
			case '3':
                maiorRemuneração()
                break
            case '4':
                editar()
                break
            case '5':
                remover()
                break
            case '6':
                rl.close()
                break
            default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios() {
    console.log('nenhum funcionario cadastrado')
    
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i])
    } exibirMenu()
}

function maiorRemuneração() {
    let maiorSalario = funcionarios[0].salario
    console.log('nenhum funcionario cadastrado')
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > maiorSalario) {
            maiorSalario = funcionarios[i].salario
        }
    } exibirMenu()
    console.log(maiorSalario)
    exibirMenu()
}

function editar() {
    if(funcionarios == '') {
        console.log('funcionario não cadastrado')
        exibirMenu()
    } else {
        for (let i = 0; i < funcionarios.length; i++) {
            console.log(`${i+1}:${funcionarios[i].nome},${funcionarios[i].cargo},${funcionarios[i].salario}`)
        }
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if (numero > 0 && numero <= funcionarios.length) {
                rl.question('Digite a novo nome: ', (nome) => {
                    rl.question('Digite a novo cargo: ', (cargo) => {
                        rl.question('Digite a novo salario: ', (salario) => {
                            funcionarios[numero - 1] = {nome, cargo, salario}
                            console.log('editado com sucesso!')
                            exibirMenu()
                        })
                    })
                 })
            } else {
                    console.log('funcionario inválido, tente novamente.')
                    exibirMenu()
            }
        })
    }
}

function remover() {
    if (funcionarios.length == '') {
        console.log('Nada cadastrado.')
        exibirMenu()
    } else {
        console.log('Lista de elementos')
        funcionarios.forEach((elemento, i) => {
        console.log(`${i+1}:${funcionarios[i].nome},${funcionarios[i].cargo},${funcionarios[i].salario}`)
        })
            rl.question('Digite o número do elemento que deseja remover:', (numero) => {
                if (numero > 0 && numero <= funcionarios.length) {
                    funcionarios.splice(numero - 1, 1)
                    console.log('Elemento removido com sucesso!')
                    exibirMenu()
                }else {
                    console.log('funcionario inválido, tente novamente.')
                    exibirMenu()
                }
        })
    }
}
