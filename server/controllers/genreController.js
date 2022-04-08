const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError')

class GenreController{
    async create(reg, res){
        const {name} = reg.body
        const genre = await Genre.create({name})

        return res.json(genre)
    }

    async getAll(reg, res){
        const genres = await Genre.findAll()

        return res.json(genres)
    }
}

module.exports = new GenreController()