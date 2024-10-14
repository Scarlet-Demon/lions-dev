import Vehicles from "../models/vehiclesModel.js";

export const store = async (req, res) => {
    try {
        const vehicle = await Vehicles.create(req.body)
        return res.status(201).json(vehicle)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const index = async (req, res) => {
    try {
        const vehicle = await Vehicles.find().exec()
        return res.status(200).json(vehicle)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const update = async (req, res) => {
    try {
        const vehicle = await Vehicles.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(vehicle)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const destroy = async (req, res) => {
    try {
        const vehicle = await Vehicles.findByIdAndDelete(req.params.id)
        return res.status(200).json(vehicle)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}