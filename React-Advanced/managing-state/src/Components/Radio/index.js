import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
// Use React.Children.map and React.cloneElement to clone the children
// and pass the correct props to each RadioOption
const RadioOptions = React.Children.map(children, (child, index) => {
return React.cloneElement(child, {
  checked: child.props.value === selected, //Check if the value of the current child is equal to the selected value
  onChange: () => onChange(child.props.value),
  //Pass the onChange function and the value of the current child
});
});

return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup

  const handleChange = (e) => {
    const newValueSelected = e.target.value;
  };
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <label htmlFor={value}>{children}</label>
    </div>
  );
};

// RadioGroup
/*

onChange is a callback function that will be called when a radio button is selected. selected is a string that represents the value of the currently selected radio button. children is an array of RadioOption components.

The component uses the React.Children.map method to iterate over the children array and clone each child using the React.cloneElement method. The result of the map method is assigned to the RadioOptions variable.

For each cloned child, the component adds two additional props: checked and onChange. checked is a boolean that is true if the value of the current child is equal to the selected value and false otherwise. onChange is a function that calls the onChange callback passed to the RadioGroup component and passes it the value of the current child.

The RadioOptions variable is then rendered inside a div with the class "RadioGroup". The div element is the final output of the component.

*/

// RadioOption
/*

This code defines a functional component called RadioOption that receives four props, value, checked, onChange and children.
The component returns JSX that renders a div with a className of RadioOption, this will be used for styling.
Inside the div, there is an input element with an id attribute set to the value prop, a type of "radio" and name of value. This input element will be used as the actual radio button element.
There is also a label element with a htmlFor attribute set to the value prop and the children prop is passed as its children. This label will be used to label the radio button element.

The input element's onChange event is connected to the onChange prop passed to the component. This means that when the input is changed, the onChange prop will be called.
The checked prop is passed to the input element as the checked attribute. This means that if the checked prop is truthy, the input will be checked, otherwise it will not be.

*/


