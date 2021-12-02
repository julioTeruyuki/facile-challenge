const { Router } = require('express')
const facileController = require('../controllers/facileController')

const router = Router()


router.get('/', facileController.renderFacile)

router.get('/facile', facileController.faciles)
router.get('/facile/:id', facileController.facile)

router.post('/facile', facileController.criaFacile)
router.put('/facile', facileController.atualizaFacile)

router.delete('/facile/:id', facileController.deletaFacile)

module.exports = router