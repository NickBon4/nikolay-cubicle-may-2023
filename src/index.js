const express = require('express')
const path = require('path')

const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const app = express()

const PORT = 5000

expressConfig(app)
//or 
//require('./config/expressConfig')(app)
handlebarsConfig(app)


//Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));