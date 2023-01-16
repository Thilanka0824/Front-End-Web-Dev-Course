import React, { useState } from "react";

const FormLab = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    console.log("Forn submitted!");
    setComment("");
    setScore("10");
  };

  const buttonStyle = {
    margin: "5px",
    padding: "8px 16px ",
    backgroundColor: "black",
    color: "white",
    fontSize: "18px",
    borderRadius: "5px",
  };
  return (
    <div
      className="form-lab"
      style={{ border: "2px solid black", margin: "100px", padding: "30px" }}
    >
      <div>
        <h1>Form Lab</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="Field" style={{ margin: "10px" }}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button disabled={!name} type="submit" style={buttonStyle}>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div
        style={{
          border: "2px solid black",
          margin: "100px",
          padding: "30px",
          backgroundColor: "whitesmoke",
        }}
      >
        <form onSubmit={handleCommentSubmit}>
          <fieldset>
            <h2>Feedback Form</h2>
            <div className="Field">
              <label>Score: {score} ⭐</label>
              <br></br>
              <input
                type="range"
                min="0"
                max="10"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <button style={buttonStyle} type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div>
        <label htmlFor="textarea">Comment: </label>
        <textarea
          id="textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default FormLab;
