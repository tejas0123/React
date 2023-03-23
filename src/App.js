import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";

function App() {
  const[mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  
  return (
    <>
      <Navbar title = "TextUtils"  aboutText = "About Us" mode = {mode} toggleMode = {toggleMode} />
      <div className='container my-3'>
        <TextForm heading = "Enter your text to analyse"  mode = {mode}/>
      </div>
    </>
  );
}
export default App;