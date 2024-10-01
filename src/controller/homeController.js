const connection = require('../config/database')
const { getAllUser, getUserByID } = require('../services/CRUD')




const getHomepage = async (req, res) => {

    let results = await getAllUser()
    return res.render('homepage.ejs', { listUser: results })  //x-<y gan' nguoc
}


const getABC = (req, res) => {
    res.render('test.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    console.log('email , name , city  :', email, name, city)
    // connection.query(
    //     `INSERT INTO Users (email, name, city) 
    //     VALUES (?, ?, ?)`,
    //     [email,name,city] ,
    //     function (err, results, fields) {
    //       console.log(results); // results contains rows returned by server
    //       res.send('User created')
    //     }
    // ) 
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city],

    )
    console.log("check result :", results)

    res.send('User created')


}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userID = req.params.id
    let user = await getUserByID(userID)

    res.render('edit.ejs', { userEdit: user }) //gan bien moi de su dung qua view
}
//export ra nhieu bien
module.exports = {
    getHomepage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}