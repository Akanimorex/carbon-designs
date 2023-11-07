import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ variant, size ="lg", scroll}) => {

    const modalSize = 
    size =="lg"?
    "w-full":
    size == "md"?
    "w-1/2":
    size == "sm"?
    "w-72":""


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        {/* <div className="w-72 rounded bg-white p-2">
          <h1 className="text-center text-xl font-semibold text-gray-700">
            Welcome back
          </h1>
          <p className="mb-5 text-center text-gray-700">Sign in</p>

          <div className="flex flex-col">
            <input
              type="text"
              className="mb-5 rounded border border-gray-700 p-2"
              placeholder="email@example.com"
            />
            <input
              type="text"
              className="mb-5 rounded border border-gray-700 p-2"
              placeholder="********"
            />
          </div>
          <div className="text-center">
            <button className="rounded bg-gray-700 px-5 py-2 text-white">
              Sign in
            </button>
          </div>
        </div> */}
        <div class={`${modalSize} mx-4 bg-white p-4 shadow-lg`}>
          <div className="header flex justify-between">
            <div>Header</div>
            <AiOutlineClose />
          </div>
          <hr />
          <div className= {`modal-body flex justify-center h-40 ${scroll?"overflow-y-auto":""}`} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            nihil unde optio laboriosam voluptatum dicta tempore hic vel
            praesentium fugiat blanditiis ratione est nisi, dolorem, rerum am
            debitis error dolorum!
          </div>
          <div className="flex justify-between gap-1 px-2 py-2">
            <button
              className={`w-1/2 rounded bg-blue-400 px-4  py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            >
              Yes
            </button>
            <button
              className={`
              w-1/2 px-4 py-2
             font-semibold 
             text-white 
             ${variant == "danger" ? "bg-red-400" : "bg-blue-400"}
             rounded
            hover:bg-blue-700 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:ring-opacity-50`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
