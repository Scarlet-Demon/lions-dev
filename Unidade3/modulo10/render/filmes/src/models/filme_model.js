import db from "../config/db"

const filmeSchema = new db.Schema({
    nome: {
        type: String,
        required: true
    },
    dataLançamento: {
        type: Number,
        required: true
    },
    diretor:{
        type:String,
        required: true
    },
    classificacao:{
        type: [String],
        required: true
    }
});

export default filmeSchema;