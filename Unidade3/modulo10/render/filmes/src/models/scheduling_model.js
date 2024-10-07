import db from "../config/db"

const alugarSchema = new db.Schema({
    alugadorPor: {
        type: db.ObjectId,
        required: true
    },
    filmeAlugado: {
        type: db.ObjectId,
        required: true
    },
    dataAlugel:{
        type:Date,
        required: true
    },
    dataRetorno:{
        type: Date,
        required: true
    }
});

export default alugarSchema;