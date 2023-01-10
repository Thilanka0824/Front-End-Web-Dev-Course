import React from "react";

const Ternary = () => {
  const WorkDays = () => {
    return <h2>Get it done!</h2>;
  };

  const WeekEnds = () => {
    return <h2>Get some rest!</h2>;
  };
  
  
const test = true
  function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
      return <WorkDays />;
    }
    return <WeekEnds />;
  }

  return (
    <div>
      <div> {test && <h1> Hello </h1>} World</div>
      Ternary
      <h1>{CurrentMessage()}</h1>

      <div>
        <img src="https://iq.opengenus.org/content/images/2022/02/prog-2.png" alt="a diagram of different programming languages"></img>
      </div>
    </div>
  );
};

export default Ternary;
