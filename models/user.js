var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  isGame: { type: Boolean, require: true },
  platform: {type: String, require: true},
  itemType: { type: String, required: true },
  price: { type: Number, required: true },
  itemCondition: {type: String, required: true},
  picture: { type: String, default: 'Pic Not Found' }
}, {
  timestamps: true
})

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  isSeller: Boolean,
  item: [itemSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);