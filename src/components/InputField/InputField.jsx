import React, { useEffect, useState } from "react";

const InputField = ({ variant }) => {
  const [isType, setType] = useState("");

  useEffect(()=>{
    console.log(variant)
    if(variant === "number"){
      setType("number")
    }
    if(variant === "password"){
      setType("password")
    }
  },[variant])

//variant is undefined

  return (
    <div>
      <label htmlFor="">
        <input
          type={isType}
          required
          placeholder="Type anything"
          className="w-1/2 border-grey-light h-[2.5rem] border-2 border-solid bg-[#f4f4f4] text-black focus:border-indigo-600 focus-visible:border-indigo-600"
          name=""
          id=""
        />
       
      </label>
    </div>
  );
};

export default InputField;
