require("dotenv").config()
const axios = require("axios")
const bcrypt = require("bcryptjs")
const { clientID, clientSecret } = process.env

module.exports = {
    getArtistCards: async (req, res) => {
        const db = req.app.get('db')

        const {userId} = req.session // Gonna set username to redux store later

        const cards = await db.get_artist_cards_by_username([userId])
        // console.log(cards)

        res.status(200).send(cards)
    },
    getAlbumCards: async (req, res) => {
        const db = req.app.get('db')

        const {userId} = req.session // Gonna set username to redux store later

        const cards = await db.get_album_cards_by_username([userId])
        // console.log(cards)

        res.status(200).send(cards)
    },
    createArtistCard: async (req, res) => {
        const db = req.app.get('db')

        const { userId } = req.session
        const {name, image, artist_id, genre, popularity, followers, album_1, alb1_tracks, album_2, alb2_tracks, card_type } = req.body

        const newCard = await db.create_new_artist_card([userId, name, image, artist_id, genre, card_type.type, album_1.name, alb1_tracks, album_2.name, alb2_tracks, popularity, followers, false])

        // console.log(newCard);

        res.status(200).send('Success')
    },
    createAlbumCard: async (req, res) => {
        const db = req.app.get('db')

        const { userId } = req.session
        const {artistName, artistId, albumName, tracks, image, genre, popularity, releaseDate, type} = req.body
        // console.log(userId, req.body);

        await db.create_new_album_card([userId, artistName, artistId, image, genre, type, albumName, tracks, popularity, releaseDate, false])

        res.status(200).send('Card created successfully')
    },
    deleteArtistCard: async (req, res) => {
        const db = req.app.get('db')

        const { cardId } = req.body

        await db.delete_artist_card([cardId])
        
        res.status(200).send('Card deleted successfully')
    },
    favoriteArtistCard: async (req, res) => {
        const db = req.app.get('db')

        const { cardId } = req.body

        await db.favorite_artist_card([cardId])
        res.status(200).send('Card updated successfully')
    },
    deleteAlbumCard: async (req, res) => {
        const db = req.app.get('db')

        const { cardId } = req.body

        await db.delete_album_card([cardId])
        
        res.status(200).send('Card deleted successfully')
    },
    favoriteAlbumCard: async (req, res) => {
        const db = req.app.get('db')

        const { cardId } = req.body

        await db.favorite_album_card([cardId])
        res.status(200).send('Card updated successfully')
    },
    addImgToCard: async (req, res) => {
        const db = req.app.get('db')

        const { cardId, image_url } = req.body

        await db.add_card_image([image_url, cardId])
        res.status(200).send('Card image updated')
    }
}