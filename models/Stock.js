const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Stock = new Schema({

    symbol: String,
    companyName: String,
    currentPrice: Number,
    openPrice: Number

})

module.exports = mongoose.model("Stock", Stock)