const express = require('express');
const router = express.Router();
const Users = require('../models/Users')

// GET-USER.
router.get('/getUser', async (req, res) => {
    const userData = await Users.find({})
    res.send({ message: ' User Get successfully', data: userData })
})

// REGISTER-USER.
router.post('/register', async (req, res) => {
    const data = req.body
    const user = new Users(data)
    await user.save()
    res.send({ message: ' User register successfully' })
})

// LOGIN-USER.
router.post('/login', async (req, res) => {
    const data = req.body;
    // 1- Check-User-Existence.
    const userExist = await Users.findOne({ email: data.email })
    if (!userExist) {
        return res.send({ message: "User Not Found" })
    }

    // 2- Check-Password-Correct.
    const isPwdCorrect = userExist.comparePassword(data.password)
    if (!isPwdCorrect) {
        return res.send({ message: "Invalid Email or Password" })
    }

    // 3- Generate-Tokens.
    const token = await userExist.generateTokens()
    return res.send({ message: "User Found", token })
})

module.exports = router;