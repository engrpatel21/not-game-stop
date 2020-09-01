const ItemReview = require('../models/item-review')

module.exports = {
    createItemReview,
  
}

function createItemReview(req, res) {
   
    req.body.createdBy = req.user._id
    req.body.createdFor = req.params.id
  
    ItemReview.create(req.body)
        .then(() => {
        res.redirect(`/items/${req.params.id}`)
    })
}