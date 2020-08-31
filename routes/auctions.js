var router = require('express').Router();
var auctionsCtrl = require('../controllers/auctions');

router.get('/items/auction/new', isLoggedIn, auctionsCtrl.newAuction);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;