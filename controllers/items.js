const Item = require('../models/item')
const axios = require('axios')
const User = require('../models/user')
const ItemReview = require('../models/item-review')
const SellerReview = require('../models/seller-review')

module.exports = {
    index,
    newGame,
    newGear,
    search,
    form,
    createItem,
    show,
    editGame,
    updateGame,
    deleteItem
}

function deleteItem(req, res) {
    Item.findByIdAndDelete(req.params.id, (err) => {
        if(err) return console.log(err)
    }).
        then(() => {
        res.redirect('/users')
    })
}

function updateGame(req, res) {
    req.body.isAuction = !!req.body.isAuction
    console.log('update body', req.body)
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then(item =>{
        item.save().then(()=>{
            console.log(item)
            res.redirect('/users')
        })
    })
}

function editGame(req, res) {
    Item.findById(req.params.id)
        .populate('seller')
        .exec((err, item) => {
        
            res.render('items/edit', {
                title: 'Edit Item',
                user: req.user ? req.user : null,
                item
            })
        })
  
}

function show(req, res) {
    Item.findById(req.params.id)
        .populate('auction.bidderId')
        .populate('seller')
        .populate('reviews.createdBy')
        .exec((err, item) => {
            SellerReview.find({ createdFor: { _id: item.seller._id } })
                .populate('createdBy')
                .populate('createdFor')
                .exec((err, sellerReviews) => {
                    res.render('items/show', {
                        title: 'Item Details',
                        user: req.user ? req.user : null,
                        item,
                        sellerReviews
                })
            
        })
   
    })
}

function createItem(req, res) {
    req.body.isAuction = !!req.body.isAuction
    req.user.isSeller = convertToBoolean(req.body.isSeller)
    req.body.seller = req.user._id
    req.user.save().then(()=>{
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

