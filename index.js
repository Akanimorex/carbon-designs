'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const Button = ({
  variant,
  disabled
}) => {
  const variantStyles = variant == "default" ? "bg-blue" : variant == "danger" ? "bg-[red]" : variant == "primary" ? "bg-blue-600" : variant == "secondary" ? "border border-blue-400" : "";
  return /*#__PURE__*/React.createElement("div", null, disabled ? /*#__PURE__*/React.createElement("button", {
    className: `px-4 py-2 font-semibold  text-white bg-gray-400 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`
  }, "Click Me") : /*#__PURE__*/React.createElement("button", {
    disabled: "true",
    className: `px-4 py-2 font-semibold text-white ${variantStyles} rounded `
  }, "Click Me"));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign$1({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React.createElement(IconBase, __assign$1({
      attr: __assign$1({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest$1(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign$1({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign$1(__assign$1({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function AiOutlineClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024","fill":"currentColor","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(props);
}function AiOutlineCopy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]})(props);
}

const Clipboard = ({
  variant
}) => {
  const [toolTipData, setToolTipData] = React.useState("Copy To Clipboard");
  React.useRef();
  const changeToolTipData = () => {
    setToolTipData("Copy To Clipboard");
  };

  //make it dynamic for other positions

  // const toolTipStyles = {
  //     beforePosition:"",
  //     afterPosition:"",
  //     beforeTranslate:"",
  //     borderTransparent:"",
  //     borderVisible:""
  // }

  // useEffect(()=>{
  //     // const { beforePosition, afterPosition, beforeTranslate, borderTransparent, borderVisible } = toolTipStyles
  //     if(variant === "top"){
  //         toolTipStyles.beforePosition = "before:-top-3"
  //         toolTipStyles.afterPosition = "after:-top-3"
  //         toolTipStyles.beforeTranslate = "before:-translate-y-full"
  //         toolTipStyles.borderTransparent="after:border-b-transparent"
  //         toolTipStyles.borderVisible="after:border-t-gray-700"
  //     }
  //     if (variant === "bottom"){
  //         toolTipStyles.beforePosition = "before:-bottom-3"
  //         toolTipStyles.afterPosition = "after:-bottom-3"
  //         toolTipStyles.beforeTranslate = "before:translate-y-full"
  //         toolTipStyles.borderTransparent="after:border-t-transparent"
  //         toolTipStyles.borderVisible="after:border-b-gray-700"
  //     }
  // },[variant]);

  // useEffect(()=>{
  //     // const { beforePosition, afterPosition, beforeTranslate, borderTransparent, borderVisible } = toolTipStyles
  //     if(variant === "top"){
  //         toolTipStyles.beforePosition = "before:-top-3"
  //         toolTipStyles.afterPosition = "after:-top-3"
  //         toolTipStyles.beforeTranslate = "before:-translate-y-full"
  //         toolTipStyles.borderTransparent="after:border-b-transparent"
  //         toolTipStyles.borderVisible="after:border-t-gray-700"
  //     }
  //     if (variant === "bottom"){
  //         toolTipStyles.beforePosition = "before:-bottom-3"
  //         toolTipStyles.afterPosition = "after:-bottom-3"
  //         toolTipStyles.beforeTranslate = "before:translate-y-full"
  //         toolTipStyles.borderTransparent="after:border-t-transparent"
  //         toolTipStyles.borderVisible="after:border-b-gray-700"
  //     }
  // },[variant]);

  return /*#__PURE__*/React.createElement("div", {
    class: "flex min-h-screen items-center justify-center bg-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: `
        relative
        before:content-[attr(data-tip)]
        before:absolute
        before:px-3 before:py-2
        ${variant === "top" ? "before:-top-3" : "before:-bottom-3"} before:left-1/2  
        before:w-max before:max-w-xs
        before:-translate-x-1/2 ${variant === "top" ? "before:-translate-y-full" : "before:translate-y-full"}
        before:rounded-md before:bg-gray-700
        before:text-white before:opacity-0
        before:transition-all

        after:absolute
        after:left-1/2 ${variant === "top" ? "after:-top-3" : "after:-bottom-3"}
        after:h-0 after:w-0
        after:-translate-x/12 after:border-8
        after:border-l-transparent
        ${variant === "top" ? "after:border-b-transparent" : "after:border-t-transparent"}
        after:border-r-transparent
        ${variant === "top" ? "after:border-t-gray-700" : "after:border-b-gray-700"}
        after:opacity-0
        after:transition-all

        hover:before:opacity-100 hover:after:opacity-100
        `,
    "data-tip": toolTipData
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setToolTipData("Copied!"),
    onMouseOver: changeToolTipData,
    className: "\r bg-gray-200 \r p-3 \r text-3xl \r font-medium \r hover:bg-gray-300 \r focus:outline \r focus:ring-4"
  }, /*#__PURE__*/React.createElement(AiOutlineCopy, null)))));
};

const FileUploader = ({
  variant
}) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [formatErrorMessage, setFormatErrorMessage] = React.useState("");
  const [dragActive, setDragActive] = React.useState(false);
  const [inputButton, setInputButton] = React.useState(true);
  React.useState(null); //for the preview :not done yet

  //TODO: FILE PREVIEW WITH FILEREADER API

  const fileInput = React.useRef(null);

  //on load, check if we are in a dragNdrop feature, setState accordingly
  React.useEffect(() => {
    if (variant === "dragAndDrop") {
      setInputButton(false);
    }
  }, [variant]);
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  const checkFileFormat = file => {
    if (!allowedExtensions.exec(file?.name)) {
      setFormatErrorMessage("wrong file format");
      fileInput.value = "";
      return false;
    }
    setFormatErrorMessage("");
    return true;
  };
  const checkFileSize = file => {
    let fileSizeInKB = file.size / 1024;
    if (fileSizeInKB > 1024) {
      //check for file greater than 1MB
      setErrorMessage("File too large");
      return false;
    }
    setErrorMessage("");
    return true;
  };
  const fileChecks = file => {
    checkFileFormat(file);
    checkFileSize(file);
    if (checkFileFormat(file) && checkFileSize(file)) {
      setSelectedFile(file);
    } else {
      console.log("stuff went wrong with the checks");
    }
  };
  const handleFileChange = e => {
    //handle validations

    e.stopPropagation();
    console.log(inputButton, "input button");

    // dragndrop feature it shouldn't be based on the variant change,
    //  so the click button can work too in the dragNdrop variant, so it's sent to a state
    let file = null;
    if (inputButton) {
      console.log("processing button file");
      file = e.target.files[0];
      fileChecks(file);
    } else {
      file = e.dataTransfer.files[0];
      fileChecks(file);
      console.log("processing drag");
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
  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
      setInputButton(false); //set button upload false
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  //triggers when the file is dropped
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e);
      // at least one file has been dropped so do something
    } else {
      console.log("there is no file");
    }
  };
  return /*#__PURE__*/React.createElement("div", null, variant === "dragAndDrop" ? /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("h4", null, "Upload files"), /*#__PURE__*/React.createElement("form", {
    onDragEnter: handleDrag,
    onSubmit: e => e.preventDefault(),
    className: "relative h-64 w-96 max-w-full text-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    className: "absolute opacity-0",
    ref: fileInput,
    name: "",
    onChange: handleFileChange
  }), /*#__PURE__*/React.createElement("label", {
    className: `flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 ${dragActive ? "bg-white" : "bg-gray-100"}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "font-oswald cursor-pointer border bg-transparent p-1 text-base hover:underline",
    type: "button",
    onClick: e => {
      fileInput.current && fileInput.current.click();
      setInputButton(true); //set button upload true when it is clicked
    },
    value: null
  }, "Add file"), dragActive && /*#__PURE__*/React.createElement("div", {
    id: "drag-file-element",
    className: "absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg",
    onDragEnter: handleDrag,
    onDragLeave: handleDrag,
    onDragOver: handleDrag,
    onDrop: handleDrop
  })), errorMessage && /*#__PURE__*/React.createElement("p", {
    className: "text-red-500"
  }, errorMessage), formatErrorMessage && /*#__PURE__*/React.createElement("p", {
    className: "text-red-500"
  }, formatErrorMessage), selectedFile && /*#__PURE__*/React.createElement("div", {
    className: "\r w-fit \r rounded-md \r border-2 \r bg-white \r px-2 \r py-2 \r text-sm \r text-gray-600 \r shadow-md\r "
  }, selectedFile?.name, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedFile("")
  }, /*#__PURE__*/React.createElement(AiOutlineClose, null), " ")))) : /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("h4", null, "Upload files"), /*#__PURE__*/React.createElement("label", {
    className: "text-sm text-gray-500"
  }, "Max file size is 1mb. Only .jpg files are supported"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    className: "absolute opacity-0",
    ref: fileInput,
    name: "",
    onChange: handleFileChange
  }), /*#__PURE__*/React.createElement("button", {
    className: "min-h-[3rem] w-[10rem] cursor-pointer bg-indigo-600 text-white",
    type: "button",
    onClick: e => fileInput.current && fileInput.current.click(),
    value: null
  }, "Add file"), errorMessage && /*#__PURE__*/React.createElement("p", {
    className: "text-red-500"
  }, errorMessage), formatErrorMessage && /*#__PURE__*/React.createElement("p", {
    className: "text-red-500"
  }, formatErrorMessage), selectedFile && /*#__PURE__*/React.createElement("div", {
    className: "\r border-grey-light\r w-fit \r rounded-md \r border-2 \r border-solid bg-white px-2 py-2 text-sm text-gray-600\r "
  }, selectedFile?.name, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedFile("")
  }, /*#__PURE__*/React.createElement(AiOutlineClose, null), " ")))));
};

var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true,
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px",
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    }
    else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit,
        };
    }
    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
    return {
        value: value,
        unit: "px",
    };
}
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}

var createAnimation = function (loaderName, frames, suffix) {
    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
    if (typeof window == "undefined" || !window.document) {
        return animationName;
    }
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
    if (styleSheet) {
        styleSheet.insertRule(keyFrames, 0);
    }
    return animationName;
};

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var moon = createAnimation("MoonLoader", "100% {transform: rotate(360deg)}", "moon");
function MoonLoader(_a) {
    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 60 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
    var _g = parseLengthAndUnit(size), value = _g.value, unit = _g.unit;
    var moonSize = value / 7;
    var wrapper = __assign({ display: "inherit", position: "relative", width: "".concat("".concat(value + moonSize * 2).concat(unit)), height: "".concat("".concat(value + moonSize * 2).concat(unit)), animation: "".concat(moon, " ").concat(0.6 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "forwards" }, cssOverride);
    var ballStyle = function (size) {
        return {
            width: cssValue(size),
            height: cssValue(size),
            borderRadius: "100%",
        };
    };
    var ball = __assign(__assign({}, ballStyle(moonSize)), { backgroundColor: "".concat(color), opacity: "0.8", position: "absolute", top: "".concat("".concat(value / 2 - moonSize / 2).concat(unit)), animation: "".concat(moon, " ").concat(0.6 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "forwards" });
    var circle = __assign(__assign({}, ballStyle(value)), { border: "".concat(moonSize, "px solid ").concat(color), opacity: "0.1", boxSizing: "content-box", position: "absolute" });
    if (!loading) {
        return null;
    }
    return (React__namespace.createElement("span", __assign({ style: wrapper }, additionalprops),
        React__namespace.createElement("span", { style: ball }),
        React__namespace.createElement("span", { style: circle })));
}

const InlineLoading = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline text-sm text-gray-500"
  }, /*#__PURE__*/React.createElement(MoonLoader, {
    size: 10,
    "aria-label": "Loading Spinner"
  }), " Loading data...");
};

const InputField = ({
  variant
}) => {
  const [isType, setType] = React.useState("");
  React.useEffect(() => {
    console.log(variant);
    if (variant === "number") {
      setType("number");
    }
    if (variant === "password") {
      setType("password");
    }
  }, [variant]);

  //variant is undefined

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, /*#__PURE__*/React.createElement("input", {
    type: isType,
    required: true,
    placeholder: "Type anything",
    className: "w-1/2 border-grey-light h-[2.5rem] border-2 border-solid bg-[#f4f4f4] text-black focus:border-indigo-600 focus-visible:border-indigo-600",
    name: "",
    id: ""
  })));
};

const Modal = ({
  variant,
  size = "lg",
  scroll
}) => {
  const modalSize = size == "lg" ? "w-full" : size == "md" ? "w-1/2" : size == "sm" ? "w-72" : "";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    class: `${modalSize} mx-4 bg-white p-4 shadow-lg`
  }, /*#__PURE__*/React.createElement("div", {
    className: "header flex justify-between"
  }, /*#__PURE__*/React.createElement("div", null, "Header"), /*#__PURE__*/React.createElement(AiOutlineClose, null)), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: `modal-body flex justify-center h-40 ${scroll ? "overflow-y-auto" : ""}`
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil unde optio laboriosam voluptatum dicta tempore hic vel praesentium fugiat blanditiis ratione est nisi, dolorem, rerum am debitis error dolorum!"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between gap-1 px-2 py-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: `w-1/2 rounded bg-blue-400 px-4  py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`
  }, "Yes"), /*#__PURE__*/React.createElement("button", {
    className: `
              w-1/2 px-4 py-2
             font-semibold 
             text-white 
             ${variant == "danger" ? "bg-red-400" : "bg-blue-400"}
             rounded
            hover:bg-blue-700 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:ring-opacity-50`
  }, "Cancel")))));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".pagination{list-style-type:none}.pagination-item{display:inline-block}.active{background:#ebf8ff;border:1px solid #ebf8ff;color:#3490dc;font-size:.5rem;padding:.5rem;text-decoration:none}";
styleInject(css_248z,{"insertAt":"top"});

const Pagination = ({
  recordsPerPageArray,
  dataArray,
  recordsPerPage,
  setRecordsPerPage
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isPrevDisabled, setPrevDisabled] = React.useState(false);
  const [isNextDisabled, setNextDisabled] = React.useState(false);
  // const [recordsPerPage, setRecordsPerPage] = useState(5)
  const totalNoOfItems = dataArray ? dataArray.length : 0;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataArray ? dataArray.slice(firstIndex, lastIndex) : [];
  const nPage = dataArray ? Math.ceil(dataArray.length / recordsPerPage) : 0;
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  React.useEffect(() => {
    // let lastPage = Data.length-1;
    if (currentPage <= 1) {
      setPrevDisabled(true);
      console.log("first page reached");
    } else {
      setPrevDisabled(false);
    }
    if (currentPage >= nPage) {
      setNextDisabled(true);
      console.log("end of the road");
    } else {
      setNextDisabled(false);
    }
  }, [currentPage, nPage]);
  const changeCurrentPage = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentPage(e.target.value);
  };
  const prevPage = e => {
    e.preventDefault();
    e.stopPropagation();
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = e => {
    e.preventDefault();
    e.stopPropagation();
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  //total:number let
  //limit:number (items per page)
  //onCHange  function to setCurrentPage

  return /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-screen items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, records > 0 ? records.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, d.title)) : null, /*#__PURE__*/React.createElement("nav", {
    className: "flex w-1/2 bg-gray-300"
  }, /*#__PURE__*/React.createElement("select", {
    name: "",
    className: "bg-gray-300",
    value: recordsPerPage,
    onChange: e => setRecordsPerPage(e.target.value),
    id: ""
  }, recordsPerPageArray.map((r, i) => /*#__PURE__*/React.createElement("option", {
    value: r,
    key: i
  }, r))), /*#__PURE__*/React.createElement("ul", {
    className: "flex w-full list-none gap-6 rounded bg-gray-300 p-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("li", {
    className: "pagination-item"
  }, isPrevDisabled ? /*#__PURE__*/React.createElement("a", {
    className: "h-10 cursor-not-allowed rounded-sm rounded-l border border-gray-100 bg-gray-200 px-3 py-2 text-gray-600 no-underline"
  }, "Prev") : /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => prevPage(e),
    className: "page-link h-10 rounded-sm rounded-l border border-gray-100 px-3  py-2 text-gray-600 no-underline"
  }, "Prev")), /*#__PURE__*/React.createElement("li", {
    className: "inline-block"
  }, `${firstIndex + 1}-${lastIndex} of ${totalNoOfItems} items`), /*#__PURE__*/React.createElement("select", {
    onChange: e => changeCurrentPage(e),
    value: currentPage,
    name: "",
    id: ""
  }, numbers.map((n, i) => /*#__PURE__*/React.createElement("option", {
    value: n,
    key: i
  }, n))), /*#__PURE__*/React.createElement("li", {
    className: "pagination-item"
  }, isNextDisabled ? /*#__PURE__*/React.createElement("a", {
    className: "page-linkrounded-l h-10 cursor-not-allowed rounded-sm border border-gray-100 bg-gray-200 px-3  py-2 text-gray-600 no-underline"
  }, "Next") : /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => nextPage(e),
    className: "page-linkrounded-l h-10 rounded-sm border border-gray-100 px-3   py-2 text-gray-600 no-underline"
  }, "Next"))))));
};

const RadioButton = ({
  variant
}) => {
  return /*#__PURE__*/React.createElement("div", null, variant === "disabled" ? /*#__PURE__*/React.createElement("label", {
    className: "cursor-not-allowed"
  }, /*#__PURE__*/React.createElement("input", {
    disabled: true,
    type: "radio",
    className: "form-radio cursor-not-allowed border-indigo-400 text-indigo-600",
    name: "",
    id: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "Disabled Radio Button")) : /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    className: "form-radio border-indigo-400 text-indigo-600",
    name: "",
    id: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: ""
  }, "Standard Radio Button")));
};

const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggleOnAndOff = () => {
    setToggle(!toggle);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "form-checkbox absolute z-50 h-5 w-5 opacity-0",
    checked: toggle,
    onChange: toggleOnAndOff
  }), /*#__PURE__*/React.createElement("div", {
    className: `toggle-circle absolute h-6 w-6 ${toggle ? "translate-x-7" : "translate-x-0"}  transform rounded-full bg-white shadow-md duration-300 ease-in-out`
  }), /*#__PURE__*/React.createElement("div", {
    className: `toggle-path h-6 w-12 rounded-full ${toggle ? "bg-indigo-600" : "bg-gray-400"}  shadow-inner`
  })), /*#__PURE__*/React.createElement("div", {
    className: "ml-3 font-medium text-gray-700"
  }, toggle ? "On" : "Off"));
};

exports.Button = Button;
exports.Clipboard = Clipboard;
exports.FileUploader = FileUploader;
exports.InlineLoading = InlineLoading;
exports.InputField = InputField;
exports.Modal = Modal;
exports.Pagination = Pagination;
exports.RadioButton = RadioButton;
exports.Toggle = Toggle;
