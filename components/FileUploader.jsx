import React, { useState, useRef} from "react";
import { AiOutlineClose } from "react-icons/ai";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");

  const fileInput = useRef(null);
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  const checkFileFormat = (file)=>{
    if (!allowedExtensions.exec(file)) {
        setErrorMessage("wrong file format")
        fileInput.value = '';
        return false;
    } 
  }

  const checkFileSize = (file) =>{
    if(file.size > 1024 ){
        setErrorMessage("File too large");
        return false
    }
  }

  const handleFileChange = (e) => {
    //handle validations
    const file = e.target.files[0];
    console.log(file, "file")
    checkFileFormat(file);
    checkFileSize(file.size)
    //check if file has been selected
    // if (e.target.files.length > 0) {
     
    // } 
    // else {
    //     //file has been not
    //     console.log("No file selected");
    //     // setSelectedFile(null);
    //   }

  
    // if (file)

  
  };
  return (
    <div>
      <div className="relative">
        <h4>Upload files</h4>
        <label className="text-sm text-gray-500">
          Max file size is 1mb. Only .jpg files are supported
        </label>
        <div>
          <input
            type="file"
            className="absolute opacity-0"
            name=""
            onChange={handleFileChange}
          />
          <button
            className="min-h-[3rem] w-[10rem] cursor-pointer bg-indigo-600 text-white"
            type="button"
            onClick={e=>fileInput.current && fileInput.current.click()}
            value={null}
          >
            Add file
          </button>

          {
            errorMessage && (
                <p className="text-red-500">{errorMessage}</p>
            )
          }

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
    </div>
  );
};

export default FileUploader;
