import React, { useState } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Header/Navbar";
import MobileMenu from "./Components/Header/MobileMenu/MobileMenu";

function App(props) {
 
  const [menuMobile, setmenuMobile] = useState(false);
      
  const handleClick = () => {
        setmenuMobile(!menuMobile);
    }


  return (
    <div className="App">
      <Navbar mobileMenu={handleClick}/>
      <MobileMenu show={menuMobile} />
      <Home />
    </div>
  );
}

export default App;
