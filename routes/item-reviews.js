const router = require('express').Router()
const itemReviewsCtrl = require('../controllers/item-reviews')

console.log('reivew router')

router.post('/items/:id/reviews', isLoggedIn, itemReviewsCtrl.createItemReview)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}
  
module.exports = router
