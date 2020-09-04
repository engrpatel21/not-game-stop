const router = require('express').Router()
const reviewsCtrl = require('../controllers/seller-reviews')


router.post('/users/:id', isLoggedIn, reviewsCtrl.createSellerReview)
//router.post('/items/:id', isLoggedIn, reviewsCtrl.createGameReview)
router.get('users/reviews', isLoggedIn, reviewsCtrl.reviews)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}
  
module.exports = router

