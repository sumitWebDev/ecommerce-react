import React, { Component } from "react";
import Header_Styles from '../styles/header.scss'

import logo from "../assets/logo.png";
import cart from "../assets/cart.svg"
class Header extends React.Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
            </ul>
            <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">SignIn</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">Register</a>
            </li>
            </ul>
            <div className="minicart">
            <img className="cart-image" src={cart} />
                <p>O items</p>
            </div>
            </span>
          </div>
          </div>
        </nav>
    );
  }
}

export default Header;
