const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const app = express()
const userRoures = require('./routes/user.routes')
const cookieParser = require("cookie-parser")
const connect = require("./db/db")
connect()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use(userRoures)

module.exports = app