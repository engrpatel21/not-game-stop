const SellerReview = require('../models/seller-review')
const User = require('../models/user')

module.exports = {
    createSellerReview,
    reviews
}

function reviews(req, res) {
    User.findById(req.user._id)
      .populate('reviews.createdBy')
      .exec((err, seller) => {
        res.render('users/user-reviews', {
          title: 'User Reviews',
          user: req.user ? req.user : null,
          seller
        })
    })
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

