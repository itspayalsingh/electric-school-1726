const express=require("express")
const moongoose=require("mongoose")
const { userrouter } = require("./routes/user.routes")
const connection=moongoose.connect("mongodb+srv://payal:singh@cluster0.z7gnmlk.mongodb.net/electric?retryWrites=true&w=majority")
const cor= require("cors")

const app=express()
app.use(cor({
    origin:"*"
}))
app.use(express.json())
app.use("/user",userrouter)


app.listen(9090,async()=>{
    try {
        await connection
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    }
    console.log("server is running at 9090");
})