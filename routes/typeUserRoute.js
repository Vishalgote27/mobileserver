const { addUserType, getUserType, editUserType, deleteUserType, softDeleteUserType } = require("../controller/typeUserController")

const router = require("express").Router()

router

    .post("/add-type", addUserType)
    .get("/", getUserType)
    .put("/edit/:id", editUserType)
// .put("/soft/:id", softDeleteUserType)

module.exports = router