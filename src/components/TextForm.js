import React, { useState } from "react";


export default function TextForm(props){
    const [text, setText] = useState('');
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

    const handleOnClear = ()=>{
        let changedText = '';
        setText(changedText);
    }

    let darkStyle = {
        background:"#212121",
        color:"white"
    }
    let lightStyle = {
        background:"white",
        color:"black"
    }
    return(
       <>
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} style = {props.mode === 'light' ? lightStyle:darkStyle}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick = {handleOnUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-1"onClick = {handleOnLowClick}>Convert to lowercase</button>
            <button type="button" className="btn btn-primary"onClick = {handleOnClear}>Clear</button>

        </div>
        
        <div className="container my-2">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
       </>
    )
}