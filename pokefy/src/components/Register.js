import React, { useState } from "react";
import '../styles/Register.css'
import axios from "axios";

const Register = (props) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resMsg, setResMsg] = useState("")

  const handleRegister = () => {
    if (username.length && password.length && email.length){
        axios.post('/auth/register', {username, password, email}).then(res => {
            setResMsg("Account created succesfully!")
        }).catch(err => {
            setResMsg("User already exists!")
        })
    } else {
        setResMsg("Please fill out every field!")
    }

    
  }
  return (
    <div className="App register">
      <h1 className="loginH1">Pokéfy</h1>

      <div className="loginContainer">
        <div className="containerItem1">
         { resMsg.length > 0 ? <h2 className="loginH2">{resMsg}</h2> : <h2 className="loginH2">Please register</h2>}
        </div>
        <div className="containerItem2 formParent">
          <form className="form">
            <input
              type="email"
              className="input"
              value={email}
              placeholder="   Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="input"
              value={username}
              placeholder="   Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="input"
              value={password}
              placeholder="   Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button style={{ display: "none" }}></button>
          </form>
        </div>
        <div className="containerItem3 buttonContainer">
          <div className="buttonContainerDiv">
            <div className="spacer"></div>
            <button
              className="inptBtnR1"
              onClick={() => props.history.push("/")}
            >
              Already have an account?
            </button>
          </div>
          <div className="buttonContainerDiv">
            <p className="forgot spacer">Forgot password?</p>
            <button className="inptBtnR2" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
