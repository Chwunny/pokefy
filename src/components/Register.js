import React, { useState } from "react";
import '../styles/Register.css'
import axios from "axios";

const Register = (props) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [resMsg, setResMsg] = useState("")

  const handleRegister = () => {
    if (passwordOne !== passwordTwo){
      setResMsg('Passwords must match')
      return
    }
    if (username.length && passwordOne.length && email.length ){
        axios.post('/auth/register', {username, passwordOne, email}).then(res => {
            setResMsg("Account created succesfully!")
            props.history.push("/")
            return
        }).catch(err => {
            setResMsg("User already exists!")
            return
        })
    } else {
        setResMsg("Please fill out every field!")
        return
    }
  }

  const passwordsMatch = passwordOne.length === passwordTwo.length // This is a true or false value that dictates what the class will be for password input 2

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
              className="register-input"
              value={email}
              placeholder="   Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="register-input"
              value={username}
              placeholder="   Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="register-input"
              value={passwordOne}
              placeholder="   Password"
              onChange={(e) => setPasswordOne(e.target.value)}
            />
            <input
              type="password"
              className={passwordsMatch ? 'register-input' : 'wrongPassword register-input'}
              value={passwordTwo}
              placeholder="   Confirm Password"
              onChange={(e) => setPasswordTwo(e.target.value)}
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
