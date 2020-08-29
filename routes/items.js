const router = require('express').Router()
const itemsCtrl = require('../controllers/items')


router.get('/items', itemsCtrl.index)
router.get('/items/new/game', isLoggedIn, itemsCtrl.newGame)
router.get('/items/new/gear', isLoggedIn, itemsCtrl.newGear)
router.get('/items/new/game/:slug', isLoggedIn, itemsCtrl.show)
router.post('/items/new/game', itemsCtrl.createItem)
router.post('/items/new/gear', itemsCtrl.createItem)
router.post('/items/new/game/search', isLoggedIn, itemsCtrl.search)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router