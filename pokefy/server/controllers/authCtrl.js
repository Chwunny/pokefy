require("dotenv").config()
const axios = require("axios")
const bcrypt = require("bcryptjs")
const { clientID, clientSecret } = process.env


module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')

        const { username, password, email } = req.body

        const [existingUser] = await db.get_user_by_username([username])
        if (existingUser) {
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.register_user([email, username, hash])

        res.status(200).send('Success')
    },
    attemptLogin: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const [existingUser] = await db.get_user_by_username([username])

        if(!existingUser){
            res.status(404).send('User does not exist')
        }

        const authenticated = bcrypt.compareSync(password, existingUser.hash)

        if(!authenticated){
            return res.status(403).send('Incorrect password')
        }

        req.session.userId = existingUser.id
        req.session.username = existingUser.username
 
        res.status(200).send(true)
    },
    getToken: async (req, res) => {
        await axios('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + Buffer.from(clientID + ":" + clientSecret).toString("base64")
            },
            data: 'grant_type=client_credentials'
        }).then(token => {
            res.status(200).send(token.data.access_token)
        }).catch(error => {
            console.log(error);
        })
    }
}