const router = require('express').Router()
const reviewsCtrl = require('../controllers/reviews')


router.post('/users/:id', isLoggedIn, reviewsCtrl.createReview)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
module.exports = router

