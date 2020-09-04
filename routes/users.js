var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/', isLoggedIn, usersCtrl.index);
router.get('/:id', usersCtrl.show)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
