import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
    if(action.type === 'ride') return {money: state.money + 10};
    if(action.type === 'fuel') return {money: state.money - 50};
    return new Error();
}

const WalletPage = () => {
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);
  const handler = () => console.log("fourth example");

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <button onClick={() => console.log("clicked")}>Click me</button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "ride" });
          }}
        >
          A new customer!
        </button>
        
        <button
          onClick={() => {
            dispatch({ type: "fuel" });
          }}
        >
          Refill the tank!
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
