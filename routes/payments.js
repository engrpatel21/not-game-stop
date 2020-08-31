const router = require('express').Router()
const paymentsCtrl = require('../controllers/payments')



router.get('/carts/payments/new', isLoggedIn, paymentsCtrl.newPayment)
router.post('/carts/payments', isLoggedIn, paymentsCtrl.createPayment)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router