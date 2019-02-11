const Stocks = require('../models/Stocks')

Stocks.find({}).remove(( ) => 
Stocks.create({
    symbol: "IQ",
    companyName: "IQIYI",
    currentPrice: 21,
    openPrice: 20
}))