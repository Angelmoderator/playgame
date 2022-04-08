const {Developer} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeveloperController{
    async create(reg, res){
        const {name} = reg.body
        const developer = await Developer.create({name})

        return res.json(developer)
    }

    async getAll(reg, res){
        const developers = await Developer.findAll()

        return res.json(developers)
    }
}

module.exports = new DeveloperController()