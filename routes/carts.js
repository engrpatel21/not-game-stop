const router = require('express').Router()
const cartsCtrl = require('../controllers/carts')


router.get('/carts', isLoggedIn, cartsCtrl.show)
router.post('/carts/:id', isLoggedIn, cartsCtrl.createCart)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router