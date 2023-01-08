import React from 'react'

const Card = (props) => {
  return (
    <div
      className=""
      style={{
        // border: "5px solid black",
        margin: "3rem",
        textAlign: "left",
        borderRadius: "1.5rem",
        padding: "2rem",
        backgroundColor: "navy",
        opacity: "70%",
        color: "white",
        boxShadow: "6px 5px 4px black",
      }}
    >
      <h2>{props.h2}</h2>
      <h3>{props.h3}</h3>
    </div>
  );
}

export default Card