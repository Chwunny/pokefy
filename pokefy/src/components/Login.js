import React, {useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// import { setLoggedStatus } from '../redux/statusReducer'

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handlerFunction = (e) => {
        e.preventDefault()
            axios.post('/auth/user', {username, password}).then(res => {
                props.dispatch({ type: 'LOG_STATUS', payload: res.data})
                props.history.push("/")
            })
    }

    const bypassLogin = () => {
        axios.post('/auth/user', {username: 'chwunny', password: 'password'}).then(res => {
            props.dispatch({ type: 'LOG_STATUS', payload: res.data})
            axios.post('/auth/token').then(res => {
                props.dispatch({ type: "SET_TOKEN", payload: res.data})
            })
            props.history.push("/")
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
    return {...state.status, ...state.token }
}

export default connect(mapStateToProps)(Login)
