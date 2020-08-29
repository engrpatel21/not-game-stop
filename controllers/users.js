const User = require('../models/user');
const Item = require('../models/item')

module.exports = {
  index,
};

function index(req, res) {
  Item.find({}).exec((err, items) => {

    res.render('users/index', {
      title: 'Profile',
      user: req.user ? req.user : null,
      items
    })
    
})
  
} 
