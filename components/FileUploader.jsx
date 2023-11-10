import React, { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const FileUploader = ({ variant }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formatErrorMessage, setFormatErrorMessage] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [inputButton, setInputButton] = useState(false);

  const [preview, setPreview] = useState(null); //for the preview :not done yet

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

    e.stopPropagation();
    // it shouldn't be based on the variant change,
    //  so the click button can work too in the dragNdrop variant
    let file =
      variant == "dragAndDrop" ? e.dataTransfer.files[0] : e.target.files[0];

      
    // if (variant == "dragAndDrop") {
    //   file = e.dataTransfer.files[0];
    // } else if (inputButton) {
    //   file = e.target.files[0];
    // }else {
    //     file = e.target.files[0]
    // }

    // console.log(file, "file");
    checkFileFormat(file);
    checkFileSize(file);

    if (checkFileFormat(file) && checkFileSize(file)) {
      setSelectedFile(file);
    } else {
      console.log("stuff went wrong with the checks");
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

  // drag function
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  //triggers when the file is dropped
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    //bug here
    console.log(e, "from file drag");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e);
      // at least one file has been dropped so do something
    } else {
      console.log("there is no file");
    }
  };

  return (
    <div>
      {variant === "dragAndDrop" ? (
        <div className="relative">
          <h4>Upload files</h4>

          <form
            onDragEnter={handleDrag}
            onSubmit={(e) => e.preventDefault()}
            className="relative h-64 w-96 max-w-full text-center"
          >
            <input
              type="file"
              className="absolute hidden"
              ref={fileInput}
              name=""
              onChange={handleFileChange}
            />
            <label
              className={`flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 ${
                dragActive ? "bg-white" : "bg-gray-100"
              }`}
            >
              {/* Max file size is 1mb. Only .jpg files are supported */}
              <button
                className="font-oswald cursor-pointer border bg-transparent p-1 text-base hover:underline"
                type="button"
                onClick={(e) => {
                  fileInput.current && fileInput.current.click();
                  setInputButton(true);
                }}
                value={null}
              >
                Add file
              </button>
              {/* A screen to cover when default dragLeave occurs */}
              {dragActive && (
                <div
                  id="drag-file-element"
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                ></div>
              )}
            </label>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {formatErrorMessage && (
              <p className="text-red-500">{formatErrorMessage}</p>
            )}

            {selectedFile && (
              <div
                className="
            w-fit 
            rounded-md 
            border-2 
            bg-white 
            px-2 
            py-2 
            text-sm 
            text-gray-600 
            shadow-md
            "
              >
                {selectedFile?.name}
                <button onClick={() => setSelectedFile("")}>
                  <AiOutlineClose />{" "}
                </button>
                {/* bug: when i clear the file, i can't upload again */}
              </div>
            )}
          </form>
        </div>
      ) : (
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
            w-fit 
            rounded-md 
            border-2 
            border-solid bg-white px-2 py-2 text-sm text-gray-600
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
      )}
    </div>
  );
};

export default FileUploader;
