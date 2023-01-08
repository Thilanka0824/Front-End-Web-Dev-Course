import React from 'react'

export const Btn = () => {
    const styleButton = {
      borderRadius: "6px",
      backgroundColor: "black",
      color: "white",
      fontSize: "1.5rem",
      /* box-shadow: 5px 2px 2px white; */
      margin: "1rem",
      padding: "0.75rem",
    };

    const clickHandler = () => {console.log("clicked")}
  return (
    <button style={styleButton} onClick={clickHandler}>
      Click Me
    </button>
  );
}



export const MouseOver = () => {
  const mouseOver = {
    borderRadius: "6px",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.5rem",
    // boxShadow: "5px 2px 2px black", 
    margin: "1rem",
    padding: "0.75rem",
  };

  const clickHandler = () => {
    console.log("moused over");
  };
  return (
    <button style={mouseOver} onMouseOver={clickHandler}>
      MouseOver
    </button>
  );
};

// export default Btn
