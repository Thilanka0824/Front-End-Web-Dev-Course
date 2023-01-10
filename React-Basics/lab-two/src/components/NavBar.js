import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate()
  return (
    <nav>
      <Link style={{ margin: "10px", padding: "10px" }} to="/">
        HomePage
      </Link>
      <Link style={{ margin: "10px", padding: "10px" }} to="/wallet">
        WalletPage
      </Link>
      <Link style={{ margin: "10px", padding: "10px" }} to="/ternary">
        Ternary
      </Link>
      <Link style={{ margin: "10px", padding: "10px" }} to="/assets">
        Assets
      </Link>
      <Link style={{ margin: "10px", padding: "10px" }} to="/player">
        Player
      </Link>
    </nav>
  );
};

export default NavBar;
