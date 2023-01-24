import { useReducer } from "react";
import reducer from "../Hooks/reducer";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42, count: 0 });

  return (
    <div>
      <div
        id="increment-age"
        style={{
          color: "black",
          padding: "40px",
          margin: "100px 500px",
          minWidth: "500px",
          minHeight: "100px",
          backgroundColor: "greenyellow",
          borderRadius: "20px",
        }}
      >
        <button
          onClick={() => {
            dispatch({ type: "incremented_age" });
          }}
        >
          Increment age
        </button>
        <h1>Hello! You are {state.age}.</h1>
      </div>
      <br />
      <div>
        <h1>number {state.count}</h1>
        <button
        style={{fontSize: "30px", fontWeight: "600"}}
        onClick={()=>{
          dispatch({type: "decrement"})
        }}
        >-</button>
        <button
        style={{fontSize: "30px", fontWeight: "600"}}
        onClick={()=>{
          dispatch({type: "increment"})
        }}
        >+</button>
      </div>
    </div>
  );
}
