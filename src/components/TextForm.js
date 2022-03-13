import { checkPropTypes } from "prop-types";
import React from "react";

TextForm.propType = {
  heading: checkPropTypes.string,
};

TextForm.defaultProps = {
  heading: "Text-Area",
};

function TextForm(props) {
  return (
    <>
      <h2>{props.heading}</h2>
      <div class="mb-3">
        <textarea class="form-control" id="myBox" rows="8"></textarea>
      </div>
    </>
  );
}

export default TextForm;
