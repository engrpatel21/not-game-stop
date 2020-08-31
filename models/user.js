const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cartSchema = new Schema({
  itemId: { type: Schema.Types.ObjectId, ref: 'Item' },
  totalCost: {type: Number}
  //gameId: { type: Schema.Types.ObjectId, ref: 'Item' },
}, {
  timestamps: true
})

const purchaseHistory = new Schema({
  firstName: String,
  lastName: String,
  ccNumber: Number,
  ccExpDate: Number,
  ccCVC: Number,
  itemID: [cartSchema]

})

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  isSeller: Boolean,
  cart : [cartSchema]
  
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);