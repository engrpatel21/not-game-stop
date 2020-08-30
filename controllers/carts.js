const Cart = require('../models/cart')

module.exports = {
    show
}

function show(req, res) {
    res.render('carts/show', {
        title: 'Shopping Cart',
        user: req.user ? req.user : null
    })
}