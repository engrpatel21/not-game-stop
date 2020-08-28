const Item = require('../models/item')
const { model } = require('../models/user')

module.exports = {
    index
}

function index(req, res) {
    res.render('items/index')
}