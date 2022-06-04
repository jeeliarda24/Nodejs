// console.log("Hello John")

const bodyParser = require('body-parser')
const express = require('express')

const app = express()

/*middleware*/
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
const viewersRoutes = require('./routes/Viewers')

app.use('/viewers', viewersRoutes)

const port = 3000


app.listen(port, () => {
    console.log("listening on port", port)
})
