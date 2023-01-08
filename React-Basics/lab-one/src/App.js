
import Card from './components/Card';
import {Btn, MouseOver} from './components/Btn';
import './App.css';
import ModeToggler from './components/ModeToggler';
import Promo from './components/Promo';
import InputComponent from './components/InputComponent';
import TextInputWithFocusBtn from './components/TextInputWithFocusBtn';
import Stopwatch from './components/Stopwatch';

function App() {
  const style = {
    // backgroundImage: "url(https://wallpapercave.com/uwp/uwp3146844.jpeg)",
    padding: "30px",
    backgroundColor: "whitesmoke",
    opacity: ""
  
  };

 
  return (

    <div className="App" style={style}>
    <Promo/>
    <InputComponent/>
    <Stopwatch/>
    <br></br>
    <TextInputWithFocusBtn/>
    <ModeToggler/>
    <Card h2="First card's h2" h3="First card's h3"/>
    <Card h2="Second card's h2" h3="Second card's h3"/>
    <Card h2="Third card's h2" h3="Third card's h3"/>
     
    <MouseOver/> 
    <Btn/>
    
    
    </div>
  );
}

export default App;
