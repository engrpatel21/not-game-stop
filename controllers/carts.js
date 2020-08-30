const Cart = require('../models/cart')
const User = require('../models/user')

module.exports = {
    show,
    createCart
}

function show(req, res) {
    User.findById(req.params.id)
        .populate('cart.itemId')
        .exec( (err, cart)  => {
                    console.log(cart)
                    res.render('carts/show', {
                        title: 'Shopping Cart',
                        user: req.user ? req.user : null,
                        cart
                    })
                })
     
}

function createCart(req, res) {
    User.findById(req.params.id)
        .then(user => {
            user.cart.push(req.body)
            user.save(err => {
                res.redirect(`/items`)   
            })
    })
    
}