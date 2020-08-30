const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    itemId: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    //gameId: { type: Schema.Types.ObjectId, ref: 'Item' },
}, {
    timestamps: true
})

module.exports = mongoose.model('cart', cartSchema)