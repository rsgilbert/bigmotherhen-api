const express = require('express')
const router = express.Router()
const User = require('../models/user')

const { hashPassword, status } = require('./utils')

/**
 * Signing up a user here basically means creating them a password.
 * If the person's email is known (that is, exists) in the user collection he can create a password.
 * A person can only signup if he does not have a password attached to his email
 */
router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    let user = await User.findOne({ email })
    if(user) {
        if(user.hashedPassword) {
            res.status(status.CONFLICT).end()
        }
        else {
            let details = {
                hashedPassword: await hashPassword(password),
                updatedAt: new Date(),
                trainer:  user.email.includes("skylla")
            }
            user = await User.findByIdAndUpdate(user._id, details, { new: true})
            return res.json(user)   
        }
    }
    else return res.json(status.NOT_FOUND).end()
})

module.exports = router

