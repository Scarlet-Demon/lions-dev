const mongoose = require("mongoose");

const esquemaFicha = new mongoose.Schema({
    raca: { 
        type: String, 
        required: true 
    },
    nome: { 
        type: String, 
        required: true 
    },
    classe: { 
        type: String, 
        required: true 
    },
    equipamento: { 
        type: String, 
        required: true 
    },
    forca: { 
        type: Number, 
        required: true 
    },
    destreza: { 
        type: Number, 
        required: true 
    },
    constituicao: { 
        type: Number, 
        required: true 
    },
    inteligencia: { 
        type: Number, 
        required: true 
    },
    sabedoria: { 
        type: Number, 
        required: true 
    },
    carisma: { 
        type: Number, 
        required: true 
    },

})

const Fichas = mongoose.model("Fichas", esquemaFicha);

module.exports = Fichas