const User = require('../models/user')
const Item = require('../models/item')

module.exports = {
    newAwardMessage,
    createAwardMessage
}

function createAwardMessage(req,res){
    req.body.message = 'You won an auction, check your Auctions page!'
    req.body.from = req.user._id
    User.findById(req.params.id)
    .then(user =>{
        user.messages.push(req.body)
        user.save().then(()=>{
            Item.findByIdAndUpdate(req.body.itemId, req.body)
            .then(()=>{
                res.redirect(`/items/auction/${req.body.itemId}`)
            })
        })
    })
}

function newAwardMessage(req, res){
    res.render('messages/award',{
        title: 'Award Winner',
        user: req.user ? req.user : null
    })
}