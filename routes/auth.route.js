const express = require('express')
const router = express.Router()
const Register = require("../actions/register.action")
const Login = require("../actions/login.action")

router.post("/register", async (req, res) => {
    try {
        let data = await new Register(req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Register successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body
        let data = await new Login({
            email, password
        }).exec()
        console.log(`result login ${JSON.stringify(data)}`)

        return res.status(200).json({
            status: "success",
            data,
            message: "Login successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'AUTH SERVICE' });
});

module.exports = router
