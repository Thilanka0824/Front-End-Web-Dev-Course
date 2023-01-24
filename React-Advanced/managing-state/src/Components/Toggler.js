import React from "react";
import reducer from "../Hooks/reducer";


const Toggler = () => {
  const [state, dispatch] = React.useReducer(reducer, { toggle: false})

  const clickHandler = () => {
    dispatch({type:"set_toggle"})
  };

  React.useEffect(() => {
    document.title = state.toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect hook";
  }, [state.toggle]);

  return (
    <div>
      <h1>Hooks</h1>
      <div>
        <h1>Rules of Hooks</h1>
        <ul>
          <li>
            First, you should only call hooks from a React component function
          </li>
          <li>
            Second, you should only call hooks at the top level of a React
            component function.
          </li>
          <li>
            Third, you are allowed to call multiple state hooks or effect hooks
            inside a component.
          </li>
          <li>
            And finally, always make these multiple hook calls in the same
            sequence
          </li>
        </ul>
      </div>
      <div>
        <h1>Using the useEffect hook</h1>
        <button onClick={clickHandler}>Toggle message</button>
        {state.toggle && <h2> Welcome to Little Lemon</h2>}
      </div>
    </div>
  );
};

export default Toggler;
