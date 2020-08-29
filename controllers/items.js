const Item = require('../models/item')
const axios = require('axios')
const User = require('../models/user')

module.exports = {
    index,
    newGame,
    search,
    show,
    createGame,

}

function createGame(req, res) {
    turnToBoolean(req.body.isSeller)
    turnToBoolean(req.body.isGame)
    User.updateOne({ googleId: req.user.googleId }, { isSeller: req.body.isSeller })
        .then((err, user) => {
            res.redirect('/items')
    })
    
}

function show(req, res) {
    axios
    .get(`https://api.rawg.io/api/games/${req.params.slug}`)
    .then((response) => {
        if (response) {
            console.log(response.data)
            res.render("items/show", {
              title: "Game Details",
              user: req.user,
              game: response.data,
            });
          } 
        });
}

function search(req, res) {
    console.log('here')
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
        title: 'New Game',
        user: req.user ? req.user : null,
        results: null
    })
}

function index(req, res) {
    if (req.user) {
        User.findOne({ googleId: req.user.googleId })
            .then(user => {
                res.render('items/index', { title: 'Buy', user })
            })
    } else {
        res.render('items/index', {title: 'Buy', user: req.user? req.user: null})
    }
}

function turnToBoolean(field) {
    if (field === 'true') field = true
    else field = false
}