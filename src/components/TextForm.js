import PropTypes from "prop-types";
import React, { useState } from "react";

TextForm.propType = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Text-Area",
};

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
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
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        {"   "}
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        {"   "}
        <button className="btn btn-primary" onClick={handleClear}>
          Clear Text
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
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
