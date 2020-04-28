import React, { useState } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Header/Navbar";
import MobileMenu from "./Components/Header/MobileMenu/MobileMenu";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";

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
      <About />
      <MyProjects />
    </div>
  );
}

export default App;
