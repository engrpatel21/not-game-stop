const Cart = require('../models/cart')
const User = require('../models/user')

module.exports = {
    show,
    createCart,
    deleteItem
}

function deleteItem(req, res) {
    User.findById(req.user._id)
        .then(user => {
            //console.log(user)
            console.log('delete', req.user._id)
            res.redirect(`/carts/${req.user_id}`)
    })
}

function show(req, res) {
 
    User.findById(req.user._id)
        .populate('cart.itemId')
        .exec( (err, cart)  => {
                  
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
                res.redirect(`/items/${req.body.itemId}`)   
            })
    })
    
}