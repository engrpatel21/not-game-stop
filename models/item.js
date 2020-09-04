const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemReviewsSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  review: String
}, {
  timestamps: true
})

const itemSchema = new Schema({
  itemName: { type: String, required: true },
  platform: {type: String, require: true},
  itemType: { type: String, required: true },
  price: { type: String, required: true },
  bid: { type: String, default: 0 },
  isAuction: {type: Boolean, default: false},
  itemCondition: {type: String, required: true},
  picture: { type: String, default: 'https://i.imgur.com/BnfmoPH.jpg'},
  isAwarded: {type: Boolean, default: false},
  auctionStart: {type: Date, default: new Date(Date.now())},
  seller: { type: Schema.Types.ObjectId, ref: 'User' },
  bidderId: { type: Schema.Types.ObjectId, ref: 'User', default: null},
  reviews: [itemReviewsSchema]
  }, {
    timestamps: true
})
  
module.exports = mongoose.model('Item', itemSchema);