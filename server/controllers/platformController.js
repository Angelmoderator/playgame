const {Platform} = require('../models/models')
const ApiError = require('../error/ApiError')

class PlatformController{
    async create(reg, res){
        const {name} = reg.body
        const platform = await Platform.create({name})

        return res.json(platform)
    }

    async getAll(reg, res){
        const platforms = await Platform.findAll()

        return res.json(platforms)
    }
}

module.exports = new PlatformController()