import React from "react";
import Bag from "./Bag";

const Promo = () => {
  const theLogo = "https://www.svgrepo.com/show/254105/batman.svg";
  
  const danger = {
    color: "tomato",
    fontSize: "50px",
  };

  return (
    <div className="promo-section">
      <div>
        <h1 style={danger}>Don't miss this deal!</h1>
      </div>
      <div>
        <Bag />
    <img height={200} width={200} src={theLogo}></img>
        <h2>
          Subscribe to my newsletter and get all the shop items at 50% off
        </h2>
      </div>
    </div>
  );
};

export default Promo;
