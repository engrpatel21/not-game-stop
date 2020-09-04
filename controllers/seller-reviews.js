const SellerReview = require('../models/seller-review')
const User = require('../models/user')

module.exports = {
    createSellerReview,
  
}

function createSellerReview(req, res) {
    req.body.createdBy = req.user._id
    User.findById(req.params.id)
        .then(user => {
            user.reviews.push(req.body)
            user.save().then(() => {
                res.redirect(`/users/${req.params.id}`)
            })
        })
 
}

