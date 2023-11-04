import React from "react";

const RadioButton = ({ variant }) => {
  return (
    <div>
      {variant === "disabled" ? (
        <label>
          <input
            disabled
            type="radio"
            className="form-radio border-indigo-400 text-indigo-600"
            name=""
            id=""
          />
          <span>Disabled Radio Button</span>
        </label>
      ) : (
        <label>
          <input
            type="radio"
            className="form-radio border-indigo-400 text-indigo-600"
            name=""
            id=""
          />
          <span>Standard Radio Button</span>
        </label>
      )}
      
    </div>
  );
};

export default RadioButton;
