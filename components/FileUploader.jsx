import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai";


const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);



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
    <div>
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

    </div>
  )
};

export default FileUploader;
