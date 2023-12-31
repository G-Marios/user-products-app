const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        // _id: { type: String },
        product: { type: String, required: true },
        cost: { type: String, required: true },
        description: { type: String },
        quantity: { type: Number, required: true }
    },
    {
        collection: 'products',
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);
