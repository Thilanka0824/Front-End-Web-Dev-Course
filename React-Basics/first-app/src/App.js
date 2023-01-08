import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import "./App.css";

const App = (props) => {
  // (props.) title is an attribute/prop passed down from  App.js' parent component, index.js
  return (
    <div className="App">
      <Heading title={props.title} name="Thilanka" color="purple"/>
      <Nav />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;
