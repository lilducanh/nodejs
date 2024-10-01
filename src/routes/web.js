 const express = require('express') 
 const {getHomepage , getABC, postCreateUser,getCreatePage,getUpdatePage} = require('../controller/homeController')
 const router = express.Router()
router.get('/', getHomepage)
  
router.get('/abc',getABC )

router.get('/create',getCreatePage) 


router.get('/update/:id',getUpdatePage)

router.post('/create-user',postCreateUser)





  module.exports = router 