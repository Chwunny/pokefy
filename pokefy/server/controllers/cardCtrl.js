require("dotenv").config()
const axios = require("axios")
const bcrypt = require("bcryptjs")
const { clientID, clientSecret } = process.env

module.exports = {
    getCards: async (req, res) => {
        const db = req.app.get('db')

        const {userId, username} = req.session // Gonna set username to redux store later

        const cards = await db.get_cards_by_username([userId])

        res.status(200).send(cards)
    },
    createCard: async (req, res) => {
        const db = req.app.get('db')

        const { userId } = req.session
        const {name, artist_id, genre, popularity, followers, album_1, alb1_tracks, album_2, alb2_tracks, card_type } = req.body

        const newCard = await db.create_new_card([userId, name, artist_id, genre, card_type.type, album_1.name, alb1_tracks, album_2.name, alb2_tracks, popularity, followers, false])

        console.log(newCard);

        res.status(200).send('Success')
    }
}