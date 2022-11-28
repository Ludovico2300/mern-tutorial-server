const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModule = require("./modules/users.module")

const cors=require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.zdrpevj.mongodb.net/merntutorial?retryWrites=true&w=majority");

app.get("/getusers", (req, res) => {
    UserModule.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

app.post("/createuser", async (req, res) => {
    const user = req.body
    const newUser = new UserModule(user);
    await newUser.save();

    res.json(user);
})

app.listen(3001, () => {
    console.log("Server is running at port 3001");
});