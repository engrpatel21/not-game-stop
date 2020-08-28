const Review = require('../models/review')

module.exports = {
    index
}

function index(req, res) {
    res.render('item/index')
}