const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")
const { authUser } = require("./middleware/auth")

const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5000"
}))
app.use(cookieParser())


// app.use("/api/auth", require("./routes/authRoute"))
app.use("/api/user", require("./routes/typeUserRoute"))
// app.use("/api/expence", authUser, require("./routes/expenceRoute"))

app.use("*", (req, res) => {
    res.json({
        message: "404:Resource Not Found"
    })
})

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("DB is Connected")
    app.listen(process.env.PORT, console.log("Server Running"))
})
