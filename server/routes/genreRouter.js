const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genreController')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), genreController.create)      // Создание
router.get('/', genreController.getAll)       // Получение
router.get('/:id', )       // Получение

module.exports = router