const express = require("express")
const path = require("path")
const auth = require("./controllers/authCtrl")

const PORT = 4000
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '../build' )))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.post('/auth/user', auth.attemptLogin)
app.post('/auth/token', auth.getToken)

app.listen(PORT, console.log(`Port ${PORT}, I choose you!`))