const router = require('express').Router()
const itemsCtrl = require('../controllers/items')


router.get('/items', itemsCtrl.index)
router.get('/items/new/game', isLoggedIn, itemsCtrl.newGame)
router.get('/items/new/gear', isLoggedIn, itemsCtrl.newGear)
router.get('/items/new/game/:slug', isLoggedIn, itemsCtrl.form)
router.get('/items/:id/edit/game', isLoggedIn, itemsCtrl.editGame)
router.get('/items/:id', itemsCtrl.show)
router.post('/items/new/game', isLoggedIn, itemsCtrl.createItem)
router.post('/items/new/gear', isLoggedIn, itemsCtrl.createItem)
router.post('/items/new/game/search', isLoggedIn, itemsCtrl.search)
router.put('/items/:id/edit/game', isLoggedIn, itemsCtrl.updateGame)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router