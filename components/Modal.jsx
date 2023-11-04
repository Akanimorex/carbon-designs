import React from "react";
import { AiOutlineClose } from "react-icons/ai";


const Modal = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div class=" bg-gray-200 p-4 w-4/5 shadow-lg">
            <div className="header flex justify-between">
                <div>Header</div>
                <AiOutlineClose/>
            </div>
            <hr />
            <div className="modal-body flex justify-center">
                Modal-body
            </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
