const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')


app.use(cors())

app.use(bodyParser.json({ extended: true }))

app.use(require('./routes/index.js'))

app.set('port', process.env.PORT || 4001)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })