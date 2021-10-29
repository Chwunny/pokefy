require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")
const path = require("path")
const auth = require("./controllers/authCtrl")
const card = require("./controllers/cardCtrl")
const { CONNECTION_STRING, SESSION_SECRET } = process.env

const PORT = 4000
const app = express()
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
    })
)

app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.post('/auth/user', auth.attemptLogin)
app.post('/auth/register', auth.register)
app.post('/auth/token', auth.getToken)

app.post('/user/cards', card.getCards)
app.post('/user/create/artist', card.createCard)
app.delete('/user/delete/card', card.deleteCard)
app.put('/user/favorite/card', card.favoriteCard)
app.put('/user/image/card', card.addImgToCard)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db);
    console.log('db connected')
    app.listen(PORT, () => console.log(`Port ${PORT}, I choose you!`))
}).catch(err => console.log(err))
