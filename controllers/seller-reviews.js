const SellerReview = require('../models/seller-review')

module.exports = {
    createSellerReview,
  
}

function createSellerReview(req, res) {
    req.body.createdBy = req.user._id
    req.body.createdFor = req.params.id
 
    SellerReview.create(req.body)
        .then(() => {
        res.redirect(`/users/${req.params.id}`)
    })
}

