const User = require('../models/user')
const Item = require('../models/item')
const ItemReview = require('../models/item-review')

module.exports = {
    newPayment,
    createPayment
}

function newPayment(req, res) {
   
    res.render('carts/payments', {
        title: 'Payment',
        user: req.user? req.user : null
    })
}

function createPayment(req, res) {
  
    User.findById(req.user._id)
        .then(user => {
            user.paymentHistory.push(req.body)
            req.user.cart.forEach((item, idx) => {
                user.purchaseHistory.push(item.itemId)
                Item.pre('deleteMany', function(next) {
                    var item = this;
                    item.model('Assignment').deleteOne({ item: item._id }, next);
                });
            })
            
            user.cart.splice(0,)
                user.save().then(() => {
                    res.redirect('/users')
                })
                
           
        })
            
}