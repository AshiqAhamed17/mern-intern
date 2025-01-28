
const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    username: String,
    email: String,
    password: String,
})

const SignUp = mongoose.model("Signup", SignupSchema);
module.exports = SignUp;