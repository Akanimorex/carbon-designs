import React from "react";

const RadioButton = ({ variant }) => {
  return (
    <div>
      {variant === "disabled" ? (
        <label className="cursor-not-allowed">
          <input
            disabled
            type="radio"
            className="form-radio cursor-not-allowed border-indigo-400 text-indigo-600"
            name=""
            id=""
          />
          <span className="text-gray-400">Disabled Radio Button</span>
        </label>
      ) : (
        <label>
          <input
            type="radio"
            className="form-radio border-indigo-400 text-indigo-600"
            name=""
            id=""
          />
          <span className="">Standard Radio Button</span>
        </label>
      )}
      
    </div>
  );
};

export default RadioButton;
