const express = require('express')
//import express from 'express'
require('dotenv').config()

const path  = require('path')
const app = express()
const port =   process.env.PORT || 8989
const hostname = process.env.HOST_NAME
//config template engine
// khai bao noi luu view
//khai bao view truoc roi dinh nghia route
app.set('views',path.join(__dirname , 'views'))
// ten template  : ejs
app.set('view engine', 'ejs')
//config static file
// app.use(express.static('.src/public'))
//de y ki~ cai nay  
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send('Hello World! tao la duc anh he he he ')
})

app.get('/abc', (req, res) => {
  res.render('test.ejs')
})

app.listen(port, hostname , () => {
  console.log(`Example app listening on port ${port}`)
})