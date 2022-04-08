const Router = require('express')
const router = new Router()
const platformController = require('../controllers/platformController')

router.post('/', platformController.create )      // Создание
router.get('/', platformController.getAll)       // Получение
router.get('/:id', )       // Получение

module.exports = router