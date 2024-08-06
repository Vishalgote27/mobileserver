const { addUserType, getUserType, editUserType, deleteUserType, softDeleteUserType } = require("../controller/typeUserController")

const router = require("express").Router()

router

    .post("/add-type", addUserType)
    .get("/", getUserType)
    .put("/edit/:id", editUserType)
    .delete("/remove/:id", deleteUserType)

module.exports = router