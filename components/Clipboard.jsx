import React, { useState, useRef } from "react";
import { AiOutlineCopy } from "react-icons/ai";

const Clipboard = ({ variant }) => {
    const [toolTipData, setToolTipData]= useState("Copy To Clipboard");
    const toolTipRef = useRef();

    const changeToolTipData = ()=>{
        setToolTipData("Copy To Clipboard");
    }

    //TODO: Automatic repositioning of the tooltip, would be influenced by a new variant
    const handleMouseEnter = (e) =>{
      console.log(e,"mouseenter");

      //getting the bearings
      const targetRect = e.target.getBoundingClientRect();
      const tooltipRect = toolTipRef.current.getBoundingClientRect();
      const space = {
        top: targetRect.top,
        bottom: window.innerHeight - targetRect.bottom,
        left: targetRect.left,
        right: window.innerWidth - targetRect.right,
      };

      //conditions for the positioning

      if (space.bottom > tooltipRect.height) {
        toolTipRef.current.style.top = targetRect.bottom + 'px';
      } else if (space.top > tooltipRect.height) {
        toolTipRef.current.style.top = targetRect.top - tooltipRect.height + 'px';
      } else if (space.right > tooltipRect.width) {
        toolTipRef.current.style.left = targetRect.right + 'px';
      } else if (space.left > tooltipRect.width) {
        toolTipRef.current.style.left = targetRect.left - tooltipRect.width + 'px';
      } else {
        toolTipRef.current.style.top = targetRect.bottom + 'px';
      }
    }


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



    

  return (
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-12">
        <div
          className={`
        relative
        before:content-[attr(data-tip)]
        before:absolute
        before:px-3 before:py-2
        ${variant === "top"?"before:-top-3":"before:-bottom-3"} before:left-1/2  
        before:w-max before:max-w-xs
        before:-translate-x-1/2 ${variant ==="top"?"before:-translate-y-full":"before:translate-y-full"}
        before:rounded-md before:bg-gray-700
        before:text-white before:opacity-0
        before:transition-all

        after:absolute
        after:left-1/2 ${variant === "top"?"after:-top-3":"after:-bottom-3"}
        after:h-0 after:w-0
        after:-translate-x/12 after:border-8
        after:border-l-transparent
        ${variant ==="top"?"after:border-b-transparent":"after:border-t-transparent"}
        after:border-r-transparent
        ${variant ==="top"?"after:border-t-gray-700":"after:border-b-gray-700"}
        after:opacity-0
        after:transition-all

        hover:before:opacity-100 hover:after:opacity-100
        `}
          data-tip={toolTipData}
        >
          <button 
          onClick={()=>setToolTipData("Copied!")} 
          onMouseOver={changeToolTipData} 
          className="
          bg-gray-200 
          p-3 
          text-3xl 
          font-medium 
          hover:bg-gray-300 
          focus:outline 
          focus:ring-4">
            <AiOutlineCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clipboard;
