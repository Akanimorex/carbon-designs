import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Form = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleOnAndOff = () => {
    setToggle(!toggle);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      // File has been selected
      setSelectedFile(e.target.files[0]);
    } else {
      console.log("No file selected");
      // setSelectedFile(null);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="form-group">
          <div className="my-2 flex flex-col">
            <label htmlFor="checkbox">Checkbox Heading</label>
            <input
              className="form-checkbox h-5 w-5 border-indigo-400 text-indigo-600"
              type="checkbox"
              name="checkbox"
            />
            {/* <input className="black" type="checkbox" name="checkbox"/>
                <input className="black" type="checkbox" name="checkbox"/> */}
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="">Number Input</label>
            <input
              type="number"
              required
              className="border-grey-light h-[2.5rem] border-2 border-solid bg-[#f4f4f4] text-black focus:border-indigo-600 focus-visible:border-indigo-600"
              name=""
              id=""
            />
          </div>
          <div className="my-2">
            <label htmlFor="radioInput">Radio Input</label>
            <div>
              <input
                type="radio"
                className="form-radio border-indigo-400 text-indigo-600"
                name=""
                id=""
              />
              <span>Standard Radio Button</span>
            </div>
            <div>
              <input type="radio" name="" id="" />
              <span>Standard Radio Button</span>
            </div>
            <div>
              <input type="radio" disabled name="" id="" />
              <span>Disabled Radio Button</span>
            </div>
          </div>

          <div className="relative">
            <input
              type="file"
              className="absolute opacity-0"
              name=""
              onChange={handleFileChange}
            />
            <button
              className="min-h-[3rem] w-[10rem] cursor-pointer bg-indigo-600 text-white"
              type="button"
              value={null}
            >
              Add file
            </button>

            {selectedFile && (
              <div>
                <input
                  type="text"
                  readOnly
                  disabled
                  value={selectedFile?.name}
                  className="border-grey-light h-[2.5rem] border-2 border-solid bg-[#f4f4f4] text-black"
                />{" "}
                <button onClick={() => setSelectedFile(null)}>
                  {" "}
                  <AiOutlineClose />{" "}
                </button>
              </div>
            )}
          </div>

          <div className="my-2">
            <label htmlFor="toggle">Toggle</label>
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

          <div>
            <button
              className="min-h-[3rem] w-[20rem] cursor-pointer bg-indigo-600 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
