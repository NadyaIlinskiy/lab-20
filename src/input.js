import React from "react";

function Input(props) {
  return (
    <div className="Input">
      <label htmlFor={props.name} className="label">
        {props.labelTitle}
        <input
          name={props.name}
          id={props.id}
          onChange={props.onChange}
          className="input-box"
          type="text"
          placeholder={props.name}
        />
      </label>
    </div>
  );
}

export default Input;
