const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdFor: { type: Schema.Types.ObjectId, ref: 'User' },
    gameId: { type: Schema.Types.ObjectId, ref: 'Item' },
    review: {type: String, default:'Great Seller'}
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', ReviewSchema)