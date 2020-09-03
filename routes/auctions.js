var router = require('express').Router();
var auctionsCtrl = require('../controllers/auctions');

router.get('/items/auction/:id', isLoggedIn, auctionsCtrl.showAuction)
router.post('/items/auctions/:id', isLoggedIn, auctionsCtrl.createAuction)
router.get('/items/auctions/:id/new', isLoggedIn, auctionsCtrl.newAuction);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;