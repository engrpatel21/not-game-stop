const User = require('../models/user');
const Item = require('../models/item');
const SellerReview = require('../models/seller-review')

module.exports = {
  index,
  show,
};



function show(req,res){
  User.findById(req.params.id, (err, seller) => {
    Item.find({})
      .populate('seller')
      .exec((err, items) => {
        SellerReview.find({})
          .populate('createdBy')
          .populate('createdFor')
          .exec((err, reviews) => {
            res.render('users/show', {
              title: 'User Profile',
              user: req.user ? req.user : null,
              seller,
              items,
              reviews
            })
          })       
     
      })
  })
}

function index(req, res) {
  Item.find({})
    .populate('seller')
    .exec((err, items) => {

    res.render('users/index', {
      title: 'Profile',
      user: req.user ? req.user : null,
      items
    })
    
})
  
} 
