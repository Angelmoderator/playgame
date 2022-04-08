const uuid = require('uuid')
const path = require('path')
const {Game, Game_Info} = require('../models/models')
const ApiError = require('../error/ApiError')
// const { info } = require('console')

class GameController{
    async create(reg, res, next){
        try{
            const {name, price, platformId, genreId, developerId, lanquageId, playerId, info} = reg.body
            const {img} = reg.files

            let fileName = uuid.v4() + ".jpg"
            img.mv( path.resolve(__dirname, '..', 'static', fileName))

            if(info){
                info = JSON.parse(info)
                info.forEach(i => {
                    Game_Info.create({
                        title: i.title,
                        description: i.description,
                        gameId: game.id
                    })
                });
            }

            const game = await Game.create({name, price, img:fileName , platformId, genreId, developerId, lanquageId, playerId})
        
            return res.json(game)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(reg, res){
        let {platformId, genreId, lanquageId, developerId, page, limit} = reg.query

        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let games;

        if(!platformId && !genreId && !lanquageId && !developerId ){
            games = await Game.findAndCountAll({limit, offset});
        }

        if(platformId && !genreId && !lanquageId && !developerId ){
            games = await Game.findAndCountAll({where:{platformId} , limit, offset});
        }
        if(!platformId && genreId && !lanquageId && !developerId ){
            games = await Game.findAndCountAll({where:{genreId}, limit, offset});
        }
        if(!platformId && !genreId && lanquageId && !developerId ){
            games = await Game.findAndCountAll({where:{lanquageId}, limit, offset});
        }
        if(!platformId && !genreId && !lanquageId && developerId ){
            games = await Game.findAndCountAll({where:{developerId}, limit, offset});
        }


        if(platformId && genreId && !lanquageId && !developerId ){
            games = await Game.findAndCountAll({where:{platformId, genreId}, limit, offset});
        }
        if(!platformId && !genreId && lanquageId && developerId ){
            games = await Game.findAndCountAll({where:{lanquageId, platformId}, limit, offset});
        }


        if(platformId && !genreId && !lanquageId && developerId ){
            games = await Game.findAndCountAll({where:{platformId, developerId}, limit, offset});
        }
        if(!platformId && genreId && lanquageId && !developerId ){
            games = await Game.findAndCountAll({where:{genreId, lanquageId}, limit, offset});
        }


        
        if(platformId && genreId && lanquageId && developerId ){
            games = await Game.findAndCountAll({where:{platformId, genreId, lanquageId, developerId}, limit, offset});
        }

        return res.json(games)
    }

    async getOne(reg, res){
        const {id} = reg.params
        const game = await Game.findOne(
            {
                where: {id},
                include: [{model: Game_Info, as: 'info'}]
            }
        )

        return res.json(game)
    }

    
}

module.exports = new GameController()