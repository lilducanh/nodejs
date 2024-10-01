require('dotenv').config()
const express = require('express')
//import express from 'express'
const  configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express()
const port =   process.env.PORT || 8989
const hostname = process.env.HOST_NAME
const connection = require('./config/database')
//config template engine
// khai bao noi luu view
configViewEngine(app)
//config static file


//config req.body - data gui tu client
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data


//khai bao route
app.use('/',webRoutes)


//test connection





app.listen(port, hostname , () => {
  console.log(`Example app listening on port ${port}`)
})