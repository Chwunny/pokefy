const userCreds = require('../user')

module.exports = {
    test(req, res){
        const { username, password } = req.body
        console.log(req.body);

        if (username === userCreds.username && password === userCreds.password){
            res.status(200).send(true)
        } else {
            res.status(401).send(false)
        }
    }
}