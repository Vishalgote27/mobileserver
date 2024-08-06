const Typeuser = require("../modal/Typeuser")

exports.addUserType = async (req, res) => {
    try {
        const result = await Typeuser.create(req.body)
        res.json({ message: "User Type add Successfully", result })
    } catch (error) {
        res.status(401).json({ message: "Unble to add type " + error })
    }
}

exports.getUserType = async (req, res) => {
    try {
        const { userId } = req.body
        // console.log(userId);
        // const result = await Typeuser.find({ userId });
        const result = await Typeuser.find();

        // if (!result) {
        //     return res.status(404).json({ message: "User type not found" });
        // }
        // const result = await Typeuser.find()
        res.json({ message: "All User Type add Successfully", result })
    } catch (error) {
        res.status(401).json({ message: "Unble to get type " + error })
    }
}

exports.editUserType = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Typeuser.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ message: "update Success", result })
    } catch (error) {
        res.status(401).json({ message: "Unble to User update" + error })
    }
}


exports.deleteUserType = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);

        const result = await Typeuser.findByIdAndDelete(id)
        console.log(result);

        res.status(200).json({
            message: "Type Delete Success",
            result
        })
    } catch (error) {
        res.status(401).json({ message: "Unble to User Delete" + error })
    }
}

exports.softDeleteUserType = async (req, res) => {
    try {
        // const { isDeleted } = req.body
        const { id } = req.params
        // const update = { isDeleted: true }
        const result = await Typeuser.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
        res.status(200).json({ message: "type update Success", result })
    } catch (error) {
        console.log(error);
        res.json({ message: "error", error })
    }
}

