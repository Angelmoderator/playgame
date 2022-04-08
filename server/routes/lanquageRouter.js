const Router = require('express')
const router = new Router()
const lanquageController = require('../controllers/lanquageController')

router.post('/', lanquageController.create)      // Создание
router.get('/', lanquageController.getAll)       // Получение
router.get('/:id', )       // Получение

module.exports = router