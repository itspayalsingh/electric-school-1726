const express = require("express");
const { usermodel } = require("../model/admin");
const bcrypt = require("bcrypt")
const userrouter = express.Router()
userrouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, sec_pass) => {
            if (err) {
                console.log(err);
            } else {
                const x = new usermodel({ name, email, password: sec_pass })
                await x.save()
                res.send('user have been added')
            }
        })

    } catch (error) {
        console.log(error);
    }
})




module.exports = { userrouter }