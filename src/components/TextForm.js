import React, { useState } from "react";

export default function TextForm(props){
    const [text, setText] = useState('Enter text here');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleOnUpClick = ()=>{
        let changedText = text.toUpperCase();
        setText(changedText);
    }

    const handleOnLowClick = ()=>{
        let changedText = text.toLowerCase();
        setText(changedText);
    }
    return(
       <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value = {text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick = {handleOnUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary"onClick = {handleOnLowClick} style = {{margin:"5px"}}>Convert to lowercase</button>

       </div>
    )
}