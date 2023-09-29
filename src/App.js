import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
 const [{},dispatch] = useStateValue();
  useEffect(()=>{
 auth.onAuthStateChanged(authUser=>{
  console.log('The USER Is >>>>',authUser);
  if(authUser){
  //User is logged In
  dispatch({
    type:'SET_USER',
    user:authUser
  })
  }else{
 // User is logged Out
 dispatch({
  type:'SET_USER',
  user:null
 })
  }
 })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route for Home with Header */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          {/* Route for Login without Header */}
          <Route
            path="/login"
            element={
              <Login/>
            }
          />

          {/* Route for Checkout with Header */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
