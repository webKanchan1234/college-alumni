const express = require("express")
const { registerUser, loginUser, allUsers, userDetails, logoutUser, updateUser, changePassword, deleteUser } = require("../controller/userController")
const { isAuthenticated, isAuthorised } = require("../middleware/auth")
const router = express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/users",allUsers)
router.get("/user/logout",isAuthenticated,logoutUser)
router.get("/user/profile",isAuthenticated,userDetails)
router.put("/user/updateUser",isAuthenticated,updateUser)
router.put("/user/updatePassword",isAuthenticated,changePassword)
router.delete("/user/deleteUser/:id",isAuthenticated,isAuthorised("admin"),deleteUser)
router.get("/user/:id",isAuthenticated,userDetails)






module.exports = router