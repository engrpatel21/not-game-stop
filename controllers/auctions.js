const Item = require('../models/item')

module.exports = {
    newAuction
}

function newAuction(req, res) {
    res.render('auction/new', {
        title: 'Place Bid',
        user: req.user ? req.user : null
    })
}