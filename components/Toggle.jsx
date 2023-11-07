import React, { useState } from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    const toggleOnAndOff = () => {
        setToggle(!toggle);
      };
  return (
    <div className="">
      <div className="relative">
        <input
          type="checkbox"
          className="form-checkbox absolute z-50 h-5 w-5 opacity-0"
          checked={toggle}
          onChange={toggleOnAndOff}
        />
        <div
          className={`toggle-circle absolute h-6 w-6 ${
            toggle ? "translate-x-7" : "translate-x-0"
          }  transform rounded-full bg-white shadow-md duration-300 ease-in-out`}
        />
        <div
          className={`toggle-path h-6 w-12 rounded-full ${
            toggle ? "bg-indigo-600" : "bg-gray-400"
          }  shadow-inner`}
        ></div>
      </div>
      <div className="ml-3 font-medium text-gray-700">
        {toggle ? "On" : "Off"}
      </div>
    </div>
  );
};

export default Toggle;
