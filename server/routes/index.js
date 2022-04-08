const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter')

const platformRouter = require('./platformRouter')
const genreRouter = require('./genreRouter')
const developerRouter = require('./developerRouter')
const lanquageRouter = require('./lanquageRouter')
// const playerRouter = require('./playerRouter')


router.use('/user', userRouter)
router.use('/game', gameRouter)

router.use('/platform', platformRouter)
router.use('/genre', genreRouter)
// router.use('/player', playerRouter)
router.use('/developer', developerRouter)
router.use('/lanquage', lanquageRouter)


module.exports = router