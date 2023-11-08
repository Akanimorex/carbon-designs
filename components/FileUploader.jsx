import React, { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formatErrorMessage, setFormatErrorMessage] = useState("");
  const [name, setName] = useState("");

  const fileInput = useRef(null);

  const checkFileHasBeenSelected = () => {};

  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  const checkFileFormat = (file) => {
    if (!allowedExtensions.exec(file?.name)) {
      setFormatErrorMessage("wrong file format");
      fileInput.value = "";
      return false;
    }
    setFormatErrorMessage("");
    return true;
  };

  const checkFileSize = (file) => {
    let fileSizeInKB = file.size / 1024;
    if (fileSizeInKB > 1024) {
      //check for file greater than 1MB
      setErrorMessage("File too large");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleFileChange = (e) => {
    //handle validations
    const file = e.target.files[0];
    // console.log(file, "file");
    checkFileFormat(file);
    checkFileSize(file);

    if (checkFileFormat(file) && checkFileFormat(file)) {
      setSelectedFile(file);
    } else {
      console.log("stuff went wron with the checks");
    }

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
            ref={fileInput}
            name=""
            onChange={handleFileChange}
          />
          <button
            className="min-h-[3rem] w-[10rem] cursor-pointer bg-indigo-600 text-white"
            type="button"
            onClick={(e) => fileInput.current && fileInput.current.click()}
            value={null}
          >
            Add file
          </button>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {formatErrorMessage && (
            <p className="text-red-500">{formatErrorMessage}</p>
          )}

          {selectedFile && (
            <div
              className="
            border-grey-light
            border-2 
            border-solid 
            bg-white 
            text-sm text-gray-600 w-fit px-2 py-2 rounded-md
            "
            >
                {selectedFile?.name}
                <button onClick={() => setSelectedFile("")}>
                    <AiOutlineClose />{" "}
                </button>
                {/* bug: when i clear the file, i can't upload again */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
