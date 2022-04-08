const {Lanquage} = require('../models/models')
const ApiError = require('../error/ApiError')

class LanquageController{
    async create(reg, res){
        const {name} = reg.body
        const lanquage = await Lanquage.create({name})

        return res.json(lanquage)
    }

    async getAll(reg, res){
        const lanquages = await Lanquage.findAll()

        return res.json(lanquages)
    }
}

module.exports = new LanquageController()