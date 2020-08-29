const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    itemType: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: String, default: 'Pic Not Found' },
    seller: { type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})