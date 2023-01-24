import React from 'react'



const HOCs = () => {
    const withMousePosition = (WrappedComponent) => {
      const injectedProp = { mousePosition: { x: 10, y: 10 } };

      return (originalProps) => {
        return (
          <WrappedComponent injectedProp={injectedProp} {...originalProps} />
        );
      };
    };

  return (
    <div>

    </div>
  )
}

export default HOCs