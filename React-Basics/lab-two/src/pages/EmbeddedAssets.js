import React from "react";
import logo from "../assets/logo512.png"
import bridge from "../assets/Golden-Gate-Bridge-San-Francisco.png";
import beach from "../assets/OceanBeach.jpg"
import ReactPlayer from "react-player"
const MyVideo = () => {
    return (
        <ReactPlayer style={{margin: "50px", padding: "50px 80px", borderStyle: "double"}} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    )
}


const EmbeddedAssets = () => {

  return (
    <div style={{backgroundColor: "whitesmoke"}}>
        <div>
        <MyVideo/>
        </div>
        <div>
      <h1>Images with some styling</h1>
        <hr></hr>
      <img src="https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg" style={{width: "600px", margin: "50px"}}></img>
        <hr></hr>
        <img src={beach} width="1000px" alt="picture of ocean beach"></img>
        <img src={bridge}></img>
        <img src={logo}></img>

        </div>
        
    </div>
  );
};

export default EmbeddedAssets;
