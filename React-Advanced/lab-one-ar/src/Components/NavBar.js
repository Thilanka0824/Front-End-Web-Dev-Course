import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="homepage">
        DessertPage
      </Link>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="formpage">
        FormPage
      </Link>
    </div>
  );
};

export default NavBar;
