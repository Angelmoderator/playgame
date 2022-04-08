import {makeAutoObservable} from "mobx";

export default class GameStore{
    constructor(){

        this._genres = [
            {id: 1, name: 'RpG'},
            {id: 2, name: 'Action'}
        ]
        this._platforms = [
           {id: 1, name: 'PC'},
           {id: 2, name: 'PS4'}
        ]
        this._lanquages = [
            {id: 1, name: 'English'},
            {id: 2, name: 'Russian'}
        ]
        this._developers = [
            {id: 1, name: 'Valve'},
            {id: 2, name: 'Ubisoft'}
        ]
        this._games = [
            {id: 1, name: 'Half life'   , price: '299', rating: 0, img: 'https://images.wallpapersden.com/image/download/half-life-emblem-orange_ZmllaG6UmZqaraWkpJRsa21lrWloZ2U.jpg', platformId: 2, genreId: 1, developerId: 1, lanquageId: 1},
            {id: 2, name: 'Prey'        , price: '799', rating: 0, img: 'https://images3.alphacoders.com/710/thumb-1920-710796.jpg',                                                   platformId: 2, genreId: 1, developerId: 2, lanquageId: 2}
        ]
        makeAutoObservable(this)
    }

    setPlatforms(platforms){
        this._platforms = platforms
    }
    setGenres(genres){
        this._genres = genres
    }
    setLanquages(lanquages){
        this._lanquages =lanquages
    }
    setDevelopers(Developers){
        this._developers = Developers
    }

    setGames(Games){
        return this._games
    }

    get platforms(){
        return this._platforms
    }
    get genres(){
        return this._genres
    }
    get lanquages(){
        return this._lanquages
    }
    get developers(){
        return this._developers
    }

    get games(){
        return this._games
    }
}