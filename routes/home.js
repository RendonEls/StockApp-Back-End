const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/home')

router.get('/', applicationController.show)

module.exports = router