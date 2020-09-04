const User = require('../models/user');
const Item = require('../models/item');
const SellerReview = require('../models/seller-review');
const item = require('../models/item');
const user = require('../models/user');

module.exports = {
  userProfile,
  show,
  updateBio,
 
};



function updateBio(req, res) {
  User.findById(req.params.id)
    .then(user => {
      user.bio = req.body.bio
      user.save().then(() => {
        res.redirect('/users')
      })
  })
}

function show(req,res){
  User.findById(req.params.id)
    .populate('reviews.createdBy')
    .exec((err, seller) => {
     
      Item.find({})
        .then(items => {
          res.render('users/show', {
            title: 'User Profile',
            user: req.user ? req.user : null,
            seller,
            items
          })
      })
    
    })

}

function userProfile(req, res) {

  Item.find({})
    .populate('seller')
    .populate('bidderId')
    .exec((err, items) => {
      SellerReview.find({createdFor: {_id: req.user._id}})
        .populate('createdFor')
        .populate('createdBy')
        .exec((err, reviews) => {
          res.render('users/index', {
            title: 'Profile',
            user: req.user ? req.user : null,
            items,
            reviews
        })
    
    })
    
})
  
} 
