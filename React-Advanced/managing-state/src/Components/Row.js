import React from "react";

const Row = ({ children, fontSize }) => {
  /* define childStyle object with a key of fontSize and value of spacing + 'px' */
  const childStyle = {
    fontSize: `${fontSize}px`,
  };

  /* return a div with className "Row" and use React.Children.map to map through the children prop */
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        /* return a clone of the child element with new props added */
        return React.cloneElement(child, {
          style: {
            /* spread the existing style props */
            ...child.props.style,
            /* spread the childStyle object only if the index is greater than 0*/
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

export default Row;

/*

In ...child.props.style, child is an object that represents a single child element of the children prop passed to the Row component. The props property of this child object contains all the properties passed to the child component, including the style property, which is being spread into the new style object that is being created.

*/

/*

React.Children.map(children, (child, index) => {}) is a method provided by the React library that allows you to iterate over an array of children elements passed to a component.

 -React.Children is a utility object that provides methods for manipulating child elements.
 
 -map is a method that iterates over an array and applies a given function to each element.
 
 -children is a prop passed to the component that contains the child elements.

 -(child, index) => {} is a callback function that will be called for each child element. It receives the current child element and its index as arguments.

In this specific line, this method maps over the children prop, which is an array of child elements, and applies the callback function passed to it. The callback function takes each child element and its index as arguments. This allows you to access the child element and its index, so you can manipulate them as you see fit.

*/