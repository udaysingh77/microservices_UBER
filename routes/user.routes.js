const express = require('express');
const router = express.Router();

const userController = require("../controllers/user.controller")

router.post('/register',userController.register)
// router.post('/login',userController.login)
// router.post('/logout',userController.logout)
// router.post('/profile',userController.profile)




module.exports = router;