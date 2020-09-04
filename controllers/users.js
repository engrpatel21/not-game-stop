const User = require('../models/user');
const Item = require('../models/item');
const SellerReview = require('../models/seller-review')

module.exports = {
  index,
  show,
  test
};

function test(req,res){
  res.render('items/test',{
    user: req.user ? req.user : null
  })
}


function show(req,res){
  User.findById(req.params.id, (err, seller) => {
    Item.find({})
      .populate('seller')
      .populate('auction.bidderId')
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
