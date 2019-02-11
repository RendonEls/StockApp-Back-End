const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/stocks", { useNewUrlParser: true})


mongoose.Promise = Promise


module.exports = mongoose;