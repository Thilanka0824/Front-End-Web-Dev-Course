import { useState, useRef } from "react";

 const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    /*setInterval
    __________________
    The setInterval function is a global function that executes a function or evaluates an expression at specified intervals (in milliseconds). It returns an interval id that can be used to clear the interval using the clearInterval function. In this case, the interval id is assigned to intervalRef.current using the useRef hook
    */

    clearInterval(intervalRef.current); //This line clears the interval identified by intervalRef.current. The clearInterval function is a global function that stops a previously created interval.
    intervalRef.current = setInterval(() => {
      //This line sets up a new interval that calls the provided function
      setNow(Date.now());
    }, 10); //every 10 milliseconds
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
export default Stopwatch