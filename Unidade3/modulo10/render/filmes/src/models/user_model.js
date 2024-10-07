import db from "../config/db"

const userSchema = new db.Schema({
    nome: {
        type: String,
        required: true
    },
    birthDay: {
        type: Date,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    tipoPermissao:{
        type:String,
        Enum: ["ADM","USUÁRIO"],
        required: true
    },
    phone:{
        type: [String],
        required: true
    },
    endereco:{
        type:String,
        required: true
    },
    numeroCasa:{
        type:String,
        required: true
    },
});

export default userSchema;