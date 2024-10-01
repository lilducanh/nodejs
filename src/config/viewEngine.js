const path = require('path')
const express = require('express')
const configViewEngine = (app) => {
        console.log("check dir name :",__dirname)
    //khai bao view truoc roi dinh nghia route
app.set('views',path.join('./src/' + 'views'))
// ten template  : ejs
app.set('view engine', 'ejs')

// app.use(express.static('.src/public'))
//de y ki~ cai nay  
app.use(express.static('./src' + '/public'))
}

module.exports =  configViewEngine