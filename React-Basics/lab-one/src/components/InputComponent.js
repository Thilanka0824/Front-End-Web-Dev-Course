import React, { useState } from "react";

const InputComponent = () => {
  const [inputForm, setInputForm] = useState({
    firstName: "Thilanka",
    lastName: "Rodrigo",
    email: "frontleanrest24@gmail.com",
  });

//   const inputChangeHandler = (e) => {
//     setInputText(e.target.value);
//   };
  return (
    <div className="input-div">
      <label
        style={{
          border: "3px solid salmon",
          margin: "40px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "salmon",
        }}
      >
        First Name: {inputForm.firstName}
      </label>
      <input
        value={inputForm.value}
        onChange={(e) => {
          setInputForm({
            ...inputForm,
            firstName: e.target.value,
          });
        }}
      />
      <br/>

      <label
        style={{
          border: "3px solid salmon",
          margin: "40px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "salmon",
        }}
      >
        Last Name: {inputForm.lastName}
      </label>
      <input
        value={inputForm.value}
        onChange={(e) => {
          setInputForm({
            ...inputForm,
            lastName: e.target.value,
          });
        }}
      />
      <br/>
      <label
        style={{
          border: "3px solid salmon",
          margin: "40px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "salmon",
        }}
      >
        Email: {inputForm.email}
      </label>
      <input
        value={inputForm.value}
        onChange={(e) => {
          setInputForm({
            ...inputForm,
            email: e.target.value,
          });
        }}
      />
      {/* <button
        onClick={() => {
          setInputText("hello");
        }}
      >
        Reset
      </button> */}
      <hr></hr>
    </div>
  );
};

export default InputComponent;
