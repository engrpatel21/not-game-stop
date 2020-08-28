const Item = require('../models/item')


module.exports = {
    index
}

function index(req, res) {
    res.render('items/index')
}