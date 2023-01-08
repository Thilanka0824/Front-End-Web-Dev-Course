import React from "react";


const ModeToggler = () => {


let darkModeOn = false;
//   const [darkMode, setDarkMode] = useState()
//   const [lightMode, setLightMode] = useState();
const darkMode = <h1>Dark Mode is On</h1>;
const lightMode = <h1>Light Mode is On</h1>;

  const handleClick = () => {
    darkModeOn = !darkModeOn;
    // console.log("hi hi")
    if(darkModeOn){
        console.log("Dark Mode is On")
    } else {
        console.log("Light Mode is On")
    }
  };
  const toggleButton = {
    borderRadius: "6px",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.5rem",
    // boxShadow: "5px 2px 2px black",
    margin: "1rem",
    padding: "0.75rem",
  };

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button style={toggleButton} onClick={handleClick}>
        Mode Toggler
      </button>
    </div>
  );
};

export default ModeToggler;
