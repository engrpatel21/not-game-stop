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
    Item.findById(req.params.id)
        .populate('auction.bidderId')
        .exec((err,item) => {
            let idx = item.auction.findIndex(a => a.bidderId.equals(req.user._id))
            // let idx == user.results.findindex(a => a.wod.equals(req.body.wodid))
            if(idx === -1){
                item.auction.push(req.body)
                item.save().then(() => {
                res.redirect(`/items/${item._id}`)
                })
            }else{
                item.auction[idx].currentBid = req.body.currentBid
                
                item.save().then(()=>{
                    res.redirect(`/items/${item._id}`)
                })
            }
            
            
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