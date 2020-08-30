const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sellerReviewSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdFor: { type: Schema.Types.ObjectId, ref: 'User' },
    review: {type: String, default:'Great Seller'}
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', sellerReviewSchema)