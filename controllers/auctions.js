const Item = require('../models/item')

module.exports = {
    newAuction
}

function newAuction(req, res) {
    Item.findById(req.params.id)
    .then(item =>{
        res.render('auction/new', {
            title: 'Place Bid',
            user: req.user ? req.user : null,
            item
        })
    })
  
}