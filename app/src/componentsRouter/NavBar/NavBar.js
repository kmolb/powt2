import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render(){
    return <div className="nav">
      <Link to="/">Home </Link>
      <Link to="/tools">Tools </Link>
      <Link to="/contact">Contact </Link>
      <Link to="/users">Users </Link>
    </div>
  }
}

export default NavBar;
