const moongoose=require("mongoose")
productschema=moongoose.Schema({
    image:Buffer,
    price:Number,
    rate:Number,
    discount:String,
    title:String,
    color:String,
    catagory:String
})

productmodel=moongoose.model("product",productschema)
module.exports={productmodel}