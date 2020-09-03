var router = require('express').Router();
var messagesCtrl = require('../controllers/messages');


router.get('/messages/:id/new', isLoggedIn, messagesCtrl.newAwardMessage)
router.post('/messages/:id', isLoggedIn, messagesCtrl.createAwardMessage)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;