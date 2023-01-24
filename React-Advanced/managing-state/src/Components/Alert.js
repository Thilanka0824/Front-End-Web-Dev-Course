import React from "react";

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div
        className="Alert"
        style={{
          backgroundColor: "orange`",
          margin: "100px 500px",
          padding: "30px",
          borderRadius: "14px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Alert;
