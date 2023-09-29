import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {  signInWithEmailAndPassword } from "firebase/auth";

import { auth, createUserWithEmailAndPassword} from "./firebase"; // Import createUserWithEmailAndPassword from firebase

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const signIn = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  



  const register = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Access user information using userCredential.user if needed
      console.log(userCredential.user);
      navigate("/"); 
    } catch (error) {
      alert(error.message);
    }
  };

  

  
  
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logo-base.com/logo/amazon-logo.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the Amazon fake CLONE Conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice, and Our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
