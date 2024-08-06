const jwt = require("jsonwebtoken")

exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            // res.redirect("/login")
            return res.status(401).json({ message: "please provide token" })
        }

        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token"
                })
            }
            req.body.userId = decode.userId
            next()
            // console.log(req.body.userId);
        })

    } catch (error) {
        res.status(401).json({
            message: "SERVER EROR" + error
        })

    }
}