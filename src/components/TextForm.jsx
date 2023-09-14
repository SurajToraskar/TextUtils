import React, { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState("");
    const handleOnChangeEvent = (event) => {
        setText(event.target.value);
    }

    const handleUpperClickEvent = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowerClickEvent = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearTextEvent = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }
    const handleCopyTextEvent = () => {
        navigator.clipboard.writeText(`${text}`);
        props.showAlert("Text Copied!", "success");
    }
    return (
        <>
            <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
            <div className="mb-3" >
                <textarea style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "light" ? "white" : "grey" }} className="form-control" value={text} onChange={handleOnChangeEvent} id="my-box text" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperClickEvent}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClickEvent}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearTextEvent}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyTextEvent} >Copy Text</button>
            <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>Your text summary</h1>
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text.split(" ").length} words and {text.length} characters</p>
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{0.008 * text.split(" ").length} Minutes read</p>
            <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>Preview</h2>
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text}</p>

        </>
    )
}

export default TextForm;