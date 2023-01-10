import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    resultRef.current.textContent = "0";
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <h3 ref={resultRef}>{result}</h3>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;

/*
- const inputRef = useRef(null): This line creates a ref object called inputRef using the useRef hook and sets its initial value to null. The inputRef ref object is then attached to the <input> element using the ref attribute. The inputRef.current property will store a reference to the actual <input> DOM node, so you can access the input's value from it.

- const resultRef = useRef(null): this line creates a ref object called resultRef using the useRef hook and sets its initial value to null. The resultRef ref object is then attached to the <p> element that displays the value of the result variable, resultRef.current property will store a reference to the actual <p> DOM node, so you can access the result element.
*/
