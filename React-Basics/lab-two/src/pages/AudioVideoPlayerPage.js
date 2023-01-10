import React from "react";
import ReactPlayer from "react-player";

const AudioVideoPlayerPage = () => {

  const vidUrl = "https://www.youtube.com/watch?v=VbQkjwaDrE4";

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }

  let name;
  if (Math.random() > 0.5) {
    name = "Mike";
  } else {
    name = "Susan";
  } 

  return (
    <div>
      <h1>React Player example</h1>
      <ReactPlayer
        style={{ margin: "50px", padding: "50px 80px", borderStyle: "double" }}
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
      <div>
        <h2>
          These two buttons are supposed to play the two different recordings of
          a species of bird named *Caspian Tern*.
        </h2>
        <button onClick={toggle1}>Caspian Tern 1</button>
        <button onClick={toggle2}>Caspian Tern 2</button>
      </div>
    </div>
  );
};

export default AudioVideoPlayerPage;
