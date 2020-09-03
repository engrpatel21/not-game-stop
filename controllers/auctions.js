const Item = require('../models/item')


module.exports = {
    newAuction,
    createAuction,
    showAuction
}

function showAuction(req, res){
    Item.findById(req.params.id)
    .populate('auction.bidderId')
    .populate('seller')
    .exec((err, item) =>{
        res.render('auction/show', {
            title: 'Auction Details',
            item,
            user: req.user ? req.user : null
        })
    })
}

function createAuction(req, res) {

    req.body.bidderId = req.user._id
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.redirect(`/items/${req.params.id}`)
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