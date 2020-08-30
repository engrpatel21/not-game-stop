const router = require('express').Router()
const itemReviewsCtrl = require('../controllers/item-reviews')



router.post('/items/:id', isLoggedIn, itemReviewsCtrl.createItemReview)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}
  
module.exports = router
