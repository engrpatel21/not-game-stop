const Item = require('../models/item')

module.exports = {
    createItemReview,
  
}

function createItemReview(req, res) {
   
    req.body.createdBy = req.user._id
    Item.findById(req.params.id)
    .then(item =>{
        item.reviews.push(req.body)
        item.save().then(()=>{
            res.redirect(`/items/${req.params.id}`)
        })
    })
}