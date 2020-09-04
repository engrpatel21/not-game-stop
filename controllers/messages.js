const User = require('../models/user')
const Item = require('../models/item')

module.exports = {
    newAwardMessage,
    createAwardMessage
}

function createAwardMessage(req,res){
    req.body.message = 'You won an auction, check your Auctions page!'
    req.body.from = req.body.bidderId
    User.findById(req.body.bidderId)
    .then(user =>{
        user.messages.push(req.body)
        user.save().then(()=>{
            Item.findByIdAndUpdate(req.params.id, {isAwarded: req.body.isAwarded})
            .then(()=>{
                res.redirect(`/users`)
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