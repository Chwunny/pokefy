const axios = require("axios")
const userCreds = require('../user')
const clientID = 'f6de03fe096941c48c361d73a058fe05'
const clientSecret = 'd681b630f47845b3809337ab098cbbc4'

module.exports = {
    attemptLogin(req, res){
        const { username, password } = req.body
        console.log(req.body);

        if (username === userCreds.username && password === userCreds.password){
            res.status(200).send(true)
        } else {
            res.status(401).send(false)
        }
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