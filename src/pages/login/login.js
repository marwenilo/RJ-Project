import React from "react";
import LoginWrapper from "./loginWrapper";
import { Link } from "react-router-dom";
import GitHub from "./components/GitHub";
import Google from "./components/Google";

const Login = () => (
  <LoginWrapper>
    <div className="title-container">
      <h1 className="title">Connect</h1>
      <h2 className="sub-title">
        Already have a <span className="right">RightJob</span> account?{" "}
        <Link to="/inscription">Sign in</Link>
      </h2>
    </div>
    <div className="links">
      <GitHub />
      <Google />
      <span></span>
      <h1>Or</h1>
    </div>
    <div className="s-container">
      <p className="paragraphe">Email</p>
      <input
        type="text"
        className="ss-titre"
        placeholder="Username@example.example"
      />
      <p className="paragraphe">Password</p>
      <input type="text" className="ss-titre" placeholder="Password" />
      <button className="btn-register">Register</button>
    </div>
  </LoginWrapper>
);
export default Login;
