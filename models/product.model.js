const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchma = mongoose.Schema(
    {
        name: {
            type : String,
            require : [true, "Please enter product name"]
        },
        quantity: {
            type: Number,
            require: true,
            default: 0
        },
        price: {
            type: Number,
            require: true,
            default: 0
        },
        image: {
            type: String,
            require: false
        }
    },
    {
        timestamp: true
    }
);

const Product = mongoose.model("Product", ProductSchma);

module.exports = Product;
