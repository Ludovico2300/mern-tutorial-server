const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username:{
        type: String,
        required: true,
    }
});

const UsersModel = mongoose.model("users", UsersSchema);

module.exports= UsersModel;