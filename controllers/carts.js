const Cart = require('../models/cart')

module.exports = {
    show,
    createCart
}

function show(req, res) {
    Cart.find({ cartOwner: { _id: req.params.id } })
        .populate('cartOwner')
        .populate('itemId')
        .exec((err, cart) => {
            res.render('carts/show', {
                title: 'Shopping Cart',
                user: req.user ? req.user : null,
                cart
            })
        })
    
}

function createCart(req, res) {
    req.body.cartOwner = req.params.id
    Cart.create(req.body)
        .then(() => {
            res.redirect(`/items/${req.body.itemId}`)
    })
    
}