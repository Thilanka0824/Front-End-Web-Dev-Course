import React from "react";

const Intro1 = () => {
  const mesh = "https://meshgradient.com/gallery/2.png";

  // const styles = {
  //   border: "15px solid",
  //   borderRadius: "30px",
  //   color: "white",
  //   borderImage: "url(https://meshgradient.com/gallery/2.png) 3",
  //   backgroundColor: "black",
  //   margin: "10px"
  // };

  return (
    <div className="blog-post-intro">
      {/* <img  width={200} src={mesh}>
        
      </img> */}
      <div className="tester">
        <h2>I've become a React developer!</h2>
      </div>
      <div>
        <p>
          I've completed the React Basics course and I'm happy to announce that
          I'm now a Junior React Developer!
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
};

export default Intro1;
