import React, { useState } from "react";

export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Uppercase clicked", text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        console.log("lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("text Cleared", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }



    const [text, setText] = useState('');
    //text = "enter text here2";  //wrong way to set state
    // setText("new text");
    return (
        <>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-2">
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#414141' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-sm btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-sm btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-sm btn-primary " onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-sm btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    );
} 
