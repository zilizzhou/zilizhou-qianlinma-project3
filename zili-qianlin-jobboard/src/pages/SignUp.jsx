import React, {useState } from "react";
import Button from "react-bootstrap/button";
import "../style/SignUp.css";
import axios from "axios";
import NavBar from "../components/NavBar";

export default (props) => {
    const[userData, setUserData] = useState({
      password: '',
      passwordVerifaction:'',
      username: '',
    })
    

    return (
        <div>
            <NavBar />
        <section className="form">
          <input
              autoFocus
              className="input"
              placeholder="Email"
              onChange={(e) => {const username = e.target.value;
                setUserData({ ...userData,
                  username: username })}}
              value={userData.username}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              onChange={(e) => {const password = e.target.value;
                setUserData({ ...userData,
                  password: password })}}
              value={userData.password}
            />
             <input
              className="input"
              placeholder="Password Verification"
              type="password"
              onChange={(e) => {const passwordVerification = e.target.value;
                setUserData({ ...userData,
                  passwordVerifaction: passwordVerification })}}
              value={userData.passwordVerifaction}
            />
            <Button id="btn"
              onClick={()=>{axios.post('/api/users', userData)
                        .then(response => console.log(response))
                        .catch(error => console.log(error))}}>
              Sign up
            </Button>
            <p className="message">
              Already have an account?{" "}
              <a className="message_a" href="/login">
                Login
              </a>
            </p>
         </section>
        </div>
      );
    }