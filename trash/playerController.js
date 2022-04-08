// const {Player} = require('../models/models')
// const ApiError = require('../error/ApiError')

// class PlayerController{
//     async create(reg, res){
//         const {name} = reg.body
//         const player = await Player.create({name})

//         return res.json(player)
//     }

//     async getAll(reg, res){
//         const players = await Player.findAll()

//         return res.json(players)
//     }
// }

// module.exports = new PlayerController()