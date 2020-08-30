const ItemReview = require('../models/item-review')

module.exports = {
    createItemReview,
  
}

function createItemReview(req, res) {
    console.log('im getting here')
    req.body.createdBy = req.user._id
    req.body.createdFor = req.params.id
    console.log('i am here', req.params)
    ItemReview.create(req.body)
        .then(() => {
        res.redirect(`/items/${req.params.id}`)
    })
}