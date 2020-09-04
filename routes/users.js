var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/', isLoggedIn, usersCtrl.userProfile);
router.get('/:id', usersCtrl.show)
router.put('/:id/bio', isLoggedIn, usersCtrl.updateBio)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
