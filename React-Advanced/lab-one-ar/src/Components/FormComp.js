import React, { useState, useRef } from "react";

const FormComp = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  /*
  The file input type
  There are some specific form inputs that are always uncontrolled, like the file input tag. 

  In React, an <input type="file" /> is always an uncontrolled component because its value is read-only and can't be set programmatically. 
  */
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = fileInput.current.files;
    // Do something with the files here
    
  };

  return (
    <div>
      <div
        style={{ border: "2px solid black", margin: "30px", padding: "30px" }}
      >
        <h3>Form Comp</h3>
        <form>
          <input value={value} onChange={handleChange} type="text" />
        </form>
      </div>
      <div
        style={{ border: "2px solid black", margin: "30px", padding: "30px", borderRadius: "100px" }}
      >
        <form onSubmit={handleSubmit}>
          <input ref={fileInput} type="file" />
        </form>
      </div>
      <div>

      </div>
    </div>
  );
};

export default FormComp;

/*

Every time you type a new character, the handleChange function is executed. It receives the new value of the input, and then it sets it in the state. In the code example above, the flow would be as follows:

The input starts out with an empty string: “”

You type “a” and handleChange gets an “a” attached in the event object, as e.target.value, and subsequently calls setValue with it. The input is then updated to have the value of “a”. 

You type “b” and handleChange gets called with e.target.value being “ab”.and sets that to the state. That gets set into the state. The input is then re-rendered once more, now with value = "ab" .

This flow pushes the value changes to the form component instead of pulling like the ref example from the uncontrolled version. Therefore, the Form component always has the input's current value without needing to ask for it explicitly.

As a result, your data (React state) and UI (input tags) are always in sync. Another implication is that forms can respond to input changes immediately, for example, by:

Instant validation per field 

Disabling the submit button unless all fields have valid data 

Enforcing a specific input format, like phone or credit card numbers 

Sometimes you will find yourself not needing any of that. In that case uncontrolled could be a more straightforward choice.

*/
