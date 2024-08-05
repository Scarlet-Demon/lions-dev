const prompt = require('prompt-sync') ()
const exibirMenu = require('./menu') 

let residencias = []

global.prompt = prompt
global.residencias = residencias

exibirMenu()