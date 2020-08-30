const Item = require('../models/item')
const axios = require('axios')
const User = require('../models/user')
const ItemReview = require('../models/item-review')

module.exports = {
    index,
    newGame,
    newGear,
    search,
    form,
    createItem,
    show
}

function show(req, res) {
    Item.findById(req.params.id)
        .populate('seller')
        .exec((err, item) => {
        ItemReview.find({})
            .populate('createdBy')
            .populate('createdFor')
            .populate('gameId')
            .exec((err, reviews) => {
                res.render('items/show', {
                    title: 'Item Details',
                    user: req.user ? req.user : null,
                    item,
                    reviews
            })
           
        })
   
    })
}

function createItem(req, res) {
    
    req.body.seller = req.user._id
    req.user.isSeller = convertToBoolean(req.body.isSeller)
    req.user.save().then(() => {
        Item.create(req.body)
            .then(() => {
                res.redirect('/items')
        })
        
    })
    
}

function form(req, res) {
    axios
    .get(`https://api.rawg.io/api/games/${req.params.slug}`)
    .then((response) => {
        if (response) {
            res.render("items/form", {
              title: "Sell Game Form",
              user: req.user,
              game: response.data,
            });
          } 
        });
}

function search(req, res) {
    axios
        .get(`https://api.rawg.io/api/games?page_size=10&search=${req.body.query}`)
        .then((response) => {
            res.render('items/games', {
                title: 'Game Search',
                user: req.user ? req.user : null,
                results: response.data.results ? response.data.results : null
            })
        
    })
}

function newGame(req, res){
    res.render('items/games', {
        title: 'Sell Games',
        user: req.user ? req.user : null,
        results: null
    })
}

function newGear(req, res) {
    res.render('items/gear', {
        title: 'Sell Gear',
        user: req.user ? req.user: null,
    })
}

function index(req, res) {
    Item.find({})
        .populate('seller')
        .exec((err, items) => {
        
        if (req.user) {
            User.findOne({ googleId: req.user.googleId })
                .then(user => {
                    res.render('items/index', { title: 'Buy', user, items })
                })
        } else {
            res.render('items/index', {title: 'Buy', user: req.user? req.user: null, items})
        }
    })
      
    
 
}

function convertToBoolean(field) {
    if (field === 'true') return field = true
    if (field === 'false') return field = false
}

