// Imports.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs')
const serverSecret = require('../config/jwt')
const jwt = require('jsonwebtoken')

// 1- UserSchema.
const UserSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    fullname: String,
    phoneNo: Number,
    tokens: [String]
})

// Password-Encryption.
UserSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified('password')) {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(user.password, salt);
        user.password = hash;
    }
    next();
})

// Password-Comparision.
UserSchema.methods.comparePassword = function (password) {
    const user = this;
    return bcryptjs.compareSync(password, user.password)
}

// Tokens-Generate.
UserSchema.methods.generateTokens = async function () {
    const user = this;
    const { _id } = user;
    const token = jwt.sign({ _id }, serverSecret);
    user.tokens.push(token);
    await user.save();
    return token;
}

// User-collection-MongoDB.
const Users = mongoose.model('Users', UserSchema)

module.exports = Users;