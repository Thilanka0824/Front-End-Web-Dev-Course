import React from 'react'

const LiveOrdersNotes = () => {
  return (
    <div>
      <p>
        React.Children.map(children, (child, index) => {}) is a method provided by the React library that allows you to iterate over an array of children elements passed to a component.</p>
        <br/> 
        <ul>

        <li>
        -React.Children is a utility object that provides methods for manipulating child elements. 
        </li>
        <li>
        -map is a method that iterates over an array and applies a given function to each element. 
        </li>
        
        <li>
        -children is a prop passed to the component that contains the
        child elements. 
        </li>
        
        <li>

        -(child, index) => {} is a callback function that will
        be called for each child element. It receives the current child element and its index as arguments. 
        </li>
        </ul>
        <br/>
        <p>
        In this specific line, this method maps over the children prop, which is an array of child elements, and applies the callback function passed to it. The callback function takes each child element and its index as arguments. This allows you to access the child
        element and its index, so you can manipulate them as you see fit.
      </p>
    </div>
  );
}

export default LiveOrdersNotes