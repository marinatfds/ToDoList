import React from "react";
import PropTypes from "prop-types";

export function Input(props) {
  return <input onChange={props.changeHandler} />;
}

Input.propTypes = { changeHandler: PropTypes.func.isRequired };
