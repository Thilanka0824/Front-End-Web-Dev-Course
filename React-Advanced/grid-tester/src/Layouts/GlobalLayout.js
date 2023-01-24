import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar.js"
import SideBar from "../Components/SideBar.js";

const GlobalLayout = () => {
  return (
    <div className="global-layout">
      <NavBar />
      <div className="grid-container">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default GlobalLayout;
