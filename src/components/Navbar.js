import React, { useState } from "react";
import PropTypes from 'prop-types'

let darkStyle = {
  backgroundColor:"black",
  color : "white",
};
let lightStyle = {
  backgroundColor:"white",
  color : "black",
};
export default function Navbar(props) {
  const [mode, setMode] = useState(lightStyle);
  const onModeChange = ()=>{
    if(mode === lightStyle){
      setMode(darkStyle);
    }
    else{
      setMode(lightStyle);
      
    }
  }
  return (
    <nav className="navbar navbar-expand-lg" style={mode}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
          </form> 
        </div>
        <button className="btn btn-dark my-2 my-sm-0 mx-2" onClick={onModeChange}>Enable Dark Mode</button>

      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here", 
  aboutText: "About"
}