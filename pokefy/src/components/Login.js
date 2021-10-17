import React, {useState} from 'react'
import axios from 'axios'

const Login = (props) => {
    // const { attemptLogin } = props.attemptLogin
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handlerFunction = (e) => {
        e.preventDefault()
        console.log(username, password);
            axios.post('/auth/user', {username: username, password: password}).then(res => {
              props.setLogin(res.data)
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
        </div>
    )
}

export default Login
