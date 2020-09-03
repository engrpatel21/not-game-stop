const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cartSchema = new Schema({
  itemId: { type: Schema.Types.ObjectId, ref: 'Item' },
 
  //gameId: { type: Schema.Types.ObjectId, ref: 'Item' },
}, {
  timestamps: true
})

const paymentHistory = new Schema({
  firstName: String,
  lastName: String,
  ccNumber: Number,
  ccExpDate: Date,
  ccCVC: Number, 
})

const purchaseHistory = new Schema({
  itemId: { type: Schema.Types.ObjectId, ref: 'Item' },
})

const messagesSchema = new Schema({
  message: String,
  from: { type: Schema.Types.ObjectId, ref: 'User' }
})

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  isSeller: Boolean,
  cart: [cartSchema],
  purchaseHistory: [purchaseHistory],
  paymentHistory: [paymentHistory],
  messages: [messagesSchema],
  state: String,
  
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);