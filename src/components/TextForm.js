import PropTypes from "prop-types";
import React, { useState } from "react";

TextForm.propType = {
  heading: PropTypes.string,
  mode: PropTypes.bool,
  showAlert: PropTypes.func,
};

TextForm.defaultProps = {
  heading: "Text-Area",
  mode: false,
};

function TextForm(props) {
  const handleEmpty = () => {
    props.showAlert("Enter Valid Input!", "warning");
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };
  const handleCopy = () => {
    let enteredText = document.getElementById("myBox");
    enteredText.select();
    navigator.clipboard.writeText(enteredText.value);
    props.showAlert("Copied text to clipboard!", "success");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode ? "#181818" : "white",
              color: props.mode ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary m-1"
          onClick={text ? handleUpClick : handleEmpty}
        >
          Convert to uppercase
        </button>

        <button
          className="btn btn-primary m-1"
          onClick={text ? handleLoClick : handleEmpty}
        >
          Convert to lowercase
        </button>

        <button
          className="btn btn-primary m-1"
          onClick={text ? handleClear : handleEmpty}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={text ? handleCopy : handleEmpty}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={text ? handleExtraSpaces : handleEmpty}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text ? text.split(" ").length : "0"} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * (text ? text.split(" ").length : 0)} minutes to read.</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}

export default TextForm;
