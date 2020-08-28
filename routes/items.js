const router = require('express').Router()
const itemsCtrl = require('../controllers/items')

router.get('/items', itemsCtrl.index)


module.exports = router