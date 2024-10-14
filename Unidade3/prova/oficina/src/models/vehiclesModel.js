import { Schema, model } from 'mongoose'

const vehiclesSchema = new Schema({
    plate: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: Number,
        required: true
    },
    maintenance: {
        type: [Schema.Types.ObjectId],
        required: false
    }
})

export default model('Vehicle', vehiclesSchema)