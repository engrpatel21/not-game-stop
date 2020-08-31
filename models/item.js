const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    platform: {type: String, require: true},
    itemType: { type: String, required: true },
    price: { type: String, required: true },
    bid: { type: String, default: 0 },
    isAuction: {type: Boolean, default: false},
    itemCondition: {type: String, required: true},
    picture: { type: String, default: 'Pic Not Found' },
    seller:  { type: Schema.Types.ObjectId, ref: 'User'}
  }, {
    timestamps: true
})
  
module.exports = mongoose.model('Item', itemSchema);