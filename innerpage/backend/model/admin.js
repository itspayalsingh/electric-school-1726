const mongoose= require("mongoose")
userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,

})

usermodel=mongoose.model("user",userschema)

module.exports={usermodel}