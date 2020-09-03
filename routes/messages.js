var router = require('express').Router();
var MessagesCtrl = require('../controllers/messages');





function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;