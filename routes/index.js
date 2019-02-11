const express = require('express')
const router = express.router()

router.use('/', require('./home'))

router.all('*', (req, res) => {
    res.status(400).send()
})

module.exports = router