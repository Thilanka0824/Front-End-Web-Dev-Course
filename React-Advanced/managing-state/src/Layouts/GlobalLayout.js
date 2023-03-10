import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
// import Footer from "../Components/Footer";

const GlobalLayout = () => {
  return (
    <div className="global-layout">
      <NavBar />
      <div className="grid-container">
        <SideBar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default GlobalLayout;
