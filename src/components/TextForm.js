import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success")
  };
  const handleClearClick = () => {
    let newText = ("");
    setText(newText);
    props.showAlert("Text is cleared!","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#113a59'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"  
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#113a59'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3 " onClick={handleClearClick}>
         Clear text
        </button>
      </div>

      <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#113a59'}} >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words And {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to tead</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
      </div>
    </>
  );
}
