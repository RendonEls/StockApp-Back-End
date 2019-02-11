const Stocks = require('../models/Stocks')

Stocks.find({}).remove(( ) => 
Stocks.create({
    symbol: "IQ",
    companyName: "IQIYI",
    currentPrice: 20.38,
    openPrice: 20.00
}))