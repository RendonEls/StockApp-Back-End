const Stocks = require('../models/Stocks')

module.exports = {
    show: (req, res) => {
        Stocks.find().then(show => res.json({show}))
    }
}

