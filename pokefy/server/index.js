const express = require("express")
const path = require("path")
const user = require("./controllers/authCtrl")

const PORT = 4000
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '../build' )))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.post('/auth/user', user.test)

app.listen(PORT, console.log(`Take us to warp ${PORT} Scotty!`))