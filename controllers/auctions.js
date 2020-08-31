const Item = require('../models/item')


module.exports = {
    newAuction,
    createAuction
}

function createAuction(req, res) {
    console.log('i am here')
    req.body.bidderId = req.user._id
    Item.findById(req.params.id)
        .then(item => {
          
            item.auction.push(req.body)
            item.save().then(() => {
                res.redirect(`/items/${item._id}`)
            })
    })
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