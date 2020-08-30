const router = require('express').Router()
const cartCtrl = require('../controllers/carts')


router.get('/carts/:id', cartCtrl.show)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router