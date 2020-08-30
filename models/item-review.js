const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemReviewSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdFor: { type: Schema.Types.ObjectId, ref: 'Item' },
    //gameId: { type: Schema.Types.ObjectId, ref: 'Item' },
    review: {type: String, default:'Great Seller'}
}, {
    timestamps: true
})

module.exports = mongoose.model('ItemReview', itemReviewSchema)