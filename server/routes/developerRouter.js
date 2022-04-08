const Router = require('express')
const router = new Router()
const developerController = require('../controllers/developerController')

router.post('/', developerController.create)      // Создание
router.get('/', developerController.getAll)       // Получение
router.get('/:id', )       // Получение

module.exports = router