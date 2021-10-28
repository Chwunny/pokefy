import React, {useState} from 'react'
import '../styles/Login.css'
import axios from 'axios'
import { connect } from 'react-redux'

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    
    const handlerFunction = (e) => {
        e.preventDefault()
            axios.post('/auth/user', {username, password}).then(res => {
                props.dispatch({ type: 'LOG_STATUS', payload: res.data})
                axios.post('/auth/token').then(res => {
                    props.dispatch({ type: "SET_TOKEN", payload: res.data})
                })
                props.history.push("/")
            })
    }

    return (
        <div className="App login">
            <h1 className="loginH1">Pokéfy</h1>

            <div className="loginContainer">
                <div className="containerItem">
                    <h2 className="loginH2">Please sign in</h2>
                </div>
                <div className="containerItem formParent">

                <form onSubmit={handlerFunction} className="form">
                    <input type="text" className="input" value={username} placeholder="   Username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" className="input" value={password} placeholder="   Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button style={{display: "none"}}></button>
                </form>

                </div>
                <div className="containerItem buttonContainer">
                    <div className="buttonContainerDiv">
                        <div className="spacer"></div>
                        <button className="inptBtn" onClick={() => props.history.push("/register")}>Register</button>
                    </div>
                    <div className="buttonContainerDiv">
                        <p className="forgot spacer">Forgot password?</p>
                        <button className="inptBtn" onClick={handlerFunction}>Sign in</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {...state.status, ...state.token }
}

export default connect(mapStateToProps)(Login)
