import React, {useState } from "react";
import Button from "react-bootstrap/button";
import "../style/LogIn.css";
import axios from "axios";
import NavBar from "../components/NavBar";

export default (props) => {
    const[userData, setUserData] = useState({
      password: '',
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
            <Button id="btn"
              onClick={()=>{axios.post('http://localhost:8000/api/users', userData)
                        .then(response => console.log(response))
                        .catch(error => console.log(error))}}>
              Log in
            </Button>
            <p className="message">
              Not registered?{" "}
              <a className="message_a" href="/signup">
                Create an account
              </a>
            </p>
           </section>
        </div>
      );
    }

