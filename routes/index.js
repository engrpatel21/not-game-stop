const router = require('express').Router()
const indexCtrl = require('../controllers/index')

router.get('/', (req, res) => {
    res.render('home/index', {user: req.user ? req.user : null})
})

module.exports = router