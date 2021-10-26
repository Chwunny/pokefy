require("dotenv").config()
const express = require("express")
const massive = require("massive")
const path = require("path")
const auth = require("./controllers/authCtrl")
const { CONNECTION_STRING } = process.env
// console.log(CONNECTION_STRING)

const PORT = 4000
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '../build' )))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.post('/auth/user', auth.attemptLogin)
app.post('/auth/register', auth.register)
app.post('/auth/token', auth.getToken)

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

// app.listen(PORT, console.log(`Port ${PORT}, I choose you!`))