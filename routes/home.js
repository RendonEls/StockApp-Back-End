const express = require('express')
const router = express.Router()
const Stocks = require('../models/Stocks')


router.get('/', (req, res) => {
    Stocks.find().then(show => res.json(show))
})

router.post('/addStock', (req, res) => {
    console.log(req.body)
    Stocks.create({
    symbol: req.body.symbol,
    companyName: req.body.companyName,
    currentPrice: req.body.currentPrice,
    openPrice: req.body.openPrice 
    })
    .then((newStock) => console.log(newStock))
})

module.exports = router