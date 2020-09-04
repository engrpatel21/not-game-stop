const router = require('express').Router()
const cartsCtrl = require('../controllers/carts')



router.get('/carts/:id', isLoggedIn, cartsCtrl.show)
router.post('/carts/:id', isLoggedIn, cartsCtrl.createCart)
router.delete('/carts/:id', isLoggedIn, cartsCtrl.deleteItem)
router.post('/carts/:id/auction', isLoggedIn, cartsCtrl.createCartAuction)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router