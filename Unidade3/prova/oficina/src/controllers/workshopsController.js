import Workshop from "../models/workshopsModel.js";

export const store = async (req, res) => {
    try {
        const workshops = await Workshop.create(req.body)
        return res.status(201).json(workshops)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const index = async (req, res) => {
    try {
        const workshops = await Workshop.find().exec()
        return res.status(200).json(workshops)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const update = async (req, res) => {
    try {
        const workshops = await Workshop.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(workshops)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}

export const destroy = async (req, res) => {
    try {
        const workshops = await Workshop.findByIdAndDelete(req.params.id)
        return res.status(200).json(workshops)
    } catch (error) {
        return res.status(400).json({ mensagem: error.mensagem })
    }
}