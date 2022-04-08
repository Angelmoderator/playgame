const sequelize = require('../db');
const {DataTypes} = require('sequelize');

// Пользоавтель

const User = sequelize.define('user', {

    id:         {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    name:       {type: DataTypes.STRING  },
    email:      {type: DataTypes.STRING, unique: true,  },
    password:   {type: DataTypes.STRING},

    role:       {type: DataTypes.STRING, defaultValue: "User"},
})

// Корзина

const Basket = sequelize.define('basket', {

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket_Game = sequelize.define('basket_game', {

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// Игра

const Game = sequelize.define('game', {

    id:         {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    name:       {type: DataTypes.STRING, allowNull:false},
    price:      {type: DataTypes.INTEGER, allowNull:false},
    rating:     {type: DataTypes.INTEGER, defaultValue: 0},
    // release:    {type: DataTypes.DATa, defaultValue: 0},
    img:        {type: DataTypes.STRING, allowNull: false},
    
})


    // Подтаблицы Game

    const Platform = sequelize.define('platform',{
        id:     {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:   {type: DataTypes.STRING, unique: true, allowNull:false},
    } );
    const Genre = sequelize.define('genre',{
        id:     {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:   {type: DataTypes.STRING, unique: true, allowNull:false},
    } );
    const Developer = sequelize.define('developer',{
        id:     {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:   {type: DataTypes.STRING, unique: true, allowNull:false},
    } );
    const Lanquage = sequelize.define('lanquage',{
        id:     {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:   {type: DataTypes.STRING, unique: true, allowNull:false},
    } );
    // const Player = sequelize.define('Player',{
    //     id:     {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //     name:   {type: DataTypes.STRING, unique: true, allowNull:false},
    // } );

// Оценка

const Rating = sequelize.define('rating',{
    id:     {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate:   {type: DataTypes.INTEGER, allowNull:false},
} );

// Описание Игры

const Game_Info = sequelize.define('game_info', {

    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:          {type: DataTypes.STRING, allowNull:false },
    description:    {type: DataTypes.STRING, allowNull: false},
})


/*                                              */
/*                      Связи                   */        
/*                                              */

const PlatformGame = sequelize.define('platform_game', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const GenreGame = sequelize.define('genre_game', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const DeveloperGame = sequelize.define('developer_game', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const LanquageGame = sequelize.define('lanquage_game', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
// const PlayerGame = sequelize.define('Player_game', {
//     id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
// })




// Пользователь и Корзина
User.hasOne(Basket)
Basket.belongsTo(User)

// Пользователь и Рейтинг
User.hasMany(Rating)
Rating.belongsTo(User)

// Корзина и Игра в корзине
Basket.hasMany(Basket_Game)
Basket_Game.belongsTo(Basket)

// Игра и Игра в корзине
Game.hasMany(Basket_Game)
Basket_Game.belongsTo(Game)

// Игра и Описание_игры
Game.hasMany(Game_Info, {as:'info'})
Game_Info.belongsTo(Game)

    // Игра и Платформа
    Platform.hasMany(Game)
    Game.belongsTo(Platform)

    Platform.belongsToMany(Game, {through: PlatformGame})
    Game.belongsToMany(Platform, {through: PlatformGame})

    // Игра и Жанр
    Genre.hasMany(Game)
    Game.belongsTo(Genre)

    Genre.belongsToMany(Game, {through: GenreGame})
    Game.belongsToMany(Genre, {through: GenreGame})

    // Игра и Разработчик
    Developer.hasMany(Game)
    Game.belongsTo(Developer)

    Developer.belongsToMany(Game, {through: DeveloperGame})
    Game.belongsToMany(Developer, {through: DeveloperGame})

    // Игра и Язык
    Lanquage.hasMany(Game)
    Game.belongsTo(Lanquage)

    Lanquage.belongsToMany(Game, {through: LanquageGame})
    Game.belongsToMany(Lanquage, {through: LanquageGame})

    // Игра и кол-во игроков
    // Player.hasMany(Game)
    // Game.belongsTo(Player)

    // Player.belongsToMany(Game, {through: PlayerGame})
    // Game.belongsToMany(Player, {through: PlayerGame})


// Экспорт

module.exports = {
    User,
    Basket,
    Basket_Game,
    Rating,

    Game,
    Game_Info,

    Platform,
    Genre,
    Developer,
    Lanquage,
    // Player,

    PlatformGame,
    GenreGame,
    DeveloperGame,
    LanquageGame,
    // PlayerGame,
}
