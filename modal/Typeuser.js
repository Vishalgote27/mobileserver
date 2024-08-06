const mongoose = require("mongoose")

const typeUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    // userId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "auth"
    // }

})

module.exports = mongoose.model("Type", typeUserSchema)