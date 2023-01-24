import React from "react";

const UseRefHookPage = () => {
  // create a ref object to store a reference to the input element
  const formInputRef = React.useRef(null);

  // function to focus on the input element
  const focusInput = () => {
    // access the current property of the ref object to access the input element
    formInputRef.current.focus();
  };
  return (
    <div>
      <h1>Using useRef to access underlying DOM</h1>
      {/* assign the ref object as the ref attribute to the input element */}
      <input ref={formInputRef} text="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefHookPage;

/*

-The useRef hook is used to create a ref object that can store a reference to an element in the DOM.

-In this case, const formInputRef = React.useRef(null) creates a ref object and initializes it with a value of null

-The ref attribute is added to the input element and the ref object is passed to it as a value, <input ref={formInputRef} text="text" />

-The focusInput function is defined, which accesses the current property of the ref object, formInputRef.current, to access the input element, then calls the focus() method on the input element to give it focus.

-The onClick event of a button is set to call the focusInput function, 

<button onClick={focusInput}>Focus Input</button>

*/