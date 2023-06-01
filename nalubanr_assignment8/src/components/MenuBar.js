import React from 'react';
import {Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Home</Link>  
            <Link to="/shop">Shop</Link> 
            <Link to="/register">Register</Link>
        </nav>
    );
  }
  

export default Navigation;