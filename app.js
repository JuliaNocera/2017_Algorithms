const express = require('express')
const bodyParser = require('body-parser')

const test = require('./test')

const port = process.env.PORT || 3100

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//let router = express.Router()


app.get('/', function(req, res) {
  res.sendFile('index.html')
})

app.get('/example', function(req, res) {
  res.json({ example: "Hello World"})
})

app.get('/test', test)

// All routes will be prefixed with /api
// app.use('/api'. router)



// ** START SERVER ** //
app.listen(port, function() {
  console.log("Its all happening at the zoo, and also port ", port)
})
