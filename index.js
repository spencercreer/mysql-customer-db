require('dotenv').config()

const connection = require('./config/connection')

connection.connect(function (err) {
    if (err) throw err
    console.log("connected to customer database")
})
