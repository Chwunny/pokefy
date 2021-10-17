import React, {useState} from 'react'
import axios from 'axios'

const Login = (props) => {
    // const { attemptLogin } = props.attemptLogin
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handlerFunction = (e) => {
        e.preventDefault()
            axios.post('/auth/user', {username, password}).then(res => {
              props.setLoggedIn(res.data)
            })
    }

    const bypassLogin = () => {
        axios.post('/auth/user', {username: 'chwunny', password: 'password'}).then(res => {
            props.setLoggedIn(res.data)
          })
    }


    return (
        <div>
            Welcome to the login page
            <form onSubmit={handlerFunction}>
                <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <button>Submit</button>
            </form>
        <button onClick={bypassLogin}>Bypass Login</button>
        </div>
    )
}

export default Login
