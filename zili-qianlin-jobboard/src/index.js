import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route excat path={"/"} element={<App></App>} />
      <Route exact path={"/home"} element={<HomePage></HomePage>} />
      <Route exact path={"/login"} element={<LogIn></LogIn>} />
      <Route exact path={"/signup"} element={<SignUp></SignUp>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
