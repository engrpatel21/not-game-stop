const mongoose = require('mongoose')
const Schema = mongoose.Schema

const auctionSchema = new Schema({
  bidderId: { type: Schema.Types.ObjectId, ref: 'User' },
  currentBid: {type: String}
})

const itemReviewsSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  review: String
})

const itemSchema = new Schema({
  itemName: { type: String, required: true },
  platform: {type: String, require: true},
  itemType: { type: String, required: true },
  price: { type: String, required: true },
  bid: { type: String, default: 0 },
  isAuction: {type: Boolean, default: false},
  itemCondition: {type: String, required: true},
  picture: { type: String },
  isAwarded: {type: Boolean, default: false},
  seller: { type: Schema.Types.ObjectId, ref: 'User' },
  auction: [auctionSchema],
  reviews: [itemReviewsSchema]
  }, {
    timestamps: true
})
  
module.exports = mongoose.model('Item', itemSchema);