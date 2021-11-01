import React from "react";
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import AuthProvider from "./Contexts/AuthProvider";
import Signup from "./Components/Register/Signup";


function App() {
  return (
    <div className="appp">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Appointment">
              <About />
            </Route>
            <Route path="/Pathology">
              <Services />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route to="/Register">
              <Signup />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div >

  );
}

export default App;