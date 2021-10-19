import React, {useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setLoggedStatus } from '../redux/statusReducer'

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handlerFunction = (e) => {
        e.preventDefault()
            axios.post('/auth/user', {username, password}).then(res => {
                setLoggedStatus(res.data)
            })
    }

    const bypassLogin = () => {
        axios.post('/auth/user', {username: 'chwunny', password: 'password'}).then(res => {
            setLoggedStatus(res.data)
          })
    }

    return (
        <div className="App">
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

function mapStateToProps(state) {
    return {...state.status }
}

export default connect(mapStateToProps, {setLoggedStatus})(Login)
