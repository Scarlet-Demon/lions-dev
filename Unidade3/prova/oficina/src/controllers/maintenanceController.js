import Maintenance from "../models/maintenanceModel.js";

export const store = async (req, res) => {
    try {
        const maintenances = await Maintenance.create(req.body)
        console.log(req.body);
        return res.status(201).json(maintenances)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const index = async (req, res) => {
    try {
        const maintenances = await Maintenance.find().exec()
        return res.status(200).json(maintenances)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const update = async (req, res) => {
    try {
        const maintenances = await Maintenance.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(maintenances)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const destroy = async (req, res) => {
    try {
        const maintenances = await Maintenance.findByIdAndDelete(req.params.id).exec()
        return res.status(200).json(maintenances)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}