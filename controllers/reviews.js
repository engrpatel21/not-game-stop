const Review = require('../models/review')

module.exports = {
    createSellerReview,
    createGameReview
}

function createSellerReview(req, res) {
    req.body.createdBy = req.user._id
    req.body.createdFor = req.params.id
    console.log('i am here', req.params)
    Review.create(req.body)
        .then(() => {
        res.redirect(`/users/${req.params.id}`)
    })
}

function createGameReview(req, res) {
    req.body.createdBy = req.user._id
    req.body.createdFor = req.params.id
    console.log('i am here items', req.params)
    Review.create(req.body)
        .then(() => {
        res.redirect(`/items`)
    })
}