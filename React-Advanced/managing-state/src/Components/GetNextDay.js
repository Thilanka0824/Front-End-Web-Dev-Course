import React, { useState, useEffect, useRef } from "react";

/*
    
This hook function usePrevious is used to store the previous value of a state variable. 
When this hook is called and passed a value, it creates a ref object and assigns the passed value to the current property of the ref object. 
Then it returns the current property of the ref object, which will always contain the previous value of the state variable. 
The useEffect hook is used to update the value of the ref object whenever the state variable changes.

*/

const GetNextDay = () => {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  function usePrevious(val) {
    // define a custom hook function `usePrevious` that takes in a value `val`
    const ref = useRef(); // create a ref object using useRef hook
    useEffect(() => {
      // useEffect hook to run a callback function
      ref.current = val; // set the value of the current property of the ref object to the passed value `val`
    }, [val]);
    return ref.current; // return the current property of the ref object
  }


  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
};

export default GetNextDay;

/*

The component uses useState hook to set the initial state of the day variable as "Monday". It also has a state variable prevDay which is initialized with the current value of day variable and is updated with the previous value of day variable every time the component re-renders.

The component also has a function getNextDay which gets called when the button is clicked. It updates the value of day variable to the next day of the week based on the current value of day.

The component also defines a custom hook usePrevious which is used to get the previous value of day variable.

The usePrevious hook uses useRef hook to create a ref object and assigns the current value of the input variable(in this case val) to the current property of the ref object.

Then on every re-render, it updates the current property with the current value of the input variable.

This way it always keeps the previous value of the input variable in the current property which can be returned and used in the component.

Finally, component returns JSX that renders the current day and previous day and has a button to update the day.

*/