import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="formpage">
        FormPage
      </Link>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="giftcardpage">
        GiftCardPage
      </Link>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="hookspage">
        HooksPage
      </Link>
      <Link style={{ margin: "30px", textDecoration: "none" }} to="fetchpage">
        FetchPage
      </Link>
    </div>
  );
};

export default NavBar;
