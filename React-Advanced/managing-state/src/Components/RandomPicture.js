import React, { useReducer } from "react";
import reducer from "../Hooks/reducer";

const RandomPicture = () => {
  // create state and dispatch using the reducer
  const [state, dispatch] = useReducer(reducer, { picture: null });
  // function to fetch image and update state
  const clickHandler = async () => {
    // fetch image
    const result = await fetch("https://picsum.photos/200/300?grayscale");
    const fetchedPicture = await result.blob();
    // update state with the fetched picture
    dispatch({
      type: "set_picture",
      picture: URL.createObjectURL(fetchedPicture), // This line is creating an object URL from the fetched picture, which is in blob format, so that it can be used as the source for an image element. The object URL can be used as a src value for an <img> tag.
    });
  };

  return (
    <div>
      <img
        style={{ minWidth: "400px" }}
        src={state.picture}
        alt="Random Black and White"
      />
      <br />
      <button onClick={clickHandler}>Fetch Random Picture</button>
    </div>
  );
};



export default RandomPicture;
