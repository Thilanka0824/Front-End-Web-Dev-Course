import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="hookspage">Hooks Page</Link>
      <Link to="/hookspage/custom">Custom Hooks Page</Link>
      <Link to="/userefhookpage">UseRef Hook Page</Link>
      <Link to="fetchpage">Fetch Page</Link>
      <Link to="childrenproppage">Children Prop Page</Link>
      <Link to="cloneelement">cloneElement()</Link>
    </div>
  );
};

export default SideBar;
