import React, { Component } from "react";
import Home from './../customjs/Home.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Conta from './../customjs/Contact.js';
import Landing from './Landing.js';
import Form from './Form.js';
import Cart from './../images/cart1.png';
import Ima from './Image.js';
import Map from './Map.js';
import logo from './../images/logo.png';
import logoR from './../images/logoRotate.png';

import Flow from './Flower.js';

const imgStyle = {
   transform: 'rotate(-90deg)'
};

class CustomRoute extends Component {

  render() {
    return (
      <Router>
        <div>
          <div  className="navbarWrap">
            <div  style={imgStyle} className="logoImageWrap">
            <NavLink exact to="/"><img src={logoR}></img></NavLink>

            </div>

          <ul className="header">
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            <li><NavLink to="/image">Image</NavLink></li>
            <li><NavLink to="/map">Map</NavLink></li>
            <li><NavLink to="/flower">FLOWER</NavLink></li>

          </ul>
          </div>
          

          <Route exact path="/"  component={Landing} />

          <Route path="/home"  component={Home} />
          <Route path="/contact" component={Conta} />
          <Route path="/form" component={Form} />
          <Route path="/image" component={Ima} />
          <Route path="/map" component={Map} />
          <Route path="/flower" component={Flow} />

        </div>


      </Router>
    );
  }
}

export default CustomRoute;