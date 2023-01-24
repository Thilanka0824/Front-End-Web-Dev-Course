import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      <Link to="formpage">Form Page</Link>
      <Link to="reducerpage">Reducer Page</Link>
      <Link to="giftcardpage">Gift Card Page</Link>
    </nav>
  );
};

export default NavBar;
