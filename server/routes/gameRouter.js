const Router = require('express')
const router = new Router()
const gameController = require('../controllers/gameController')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), gameController.create)         // Создание
router.get('/', gameController.getAll)          // Получение
router.get('/:id', gameController.getOne)       // Получение

module.exports = router