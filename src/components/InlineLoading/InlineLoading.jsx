import React, { useState } from "react"
import { MoonLoader } from "react-spinners";





const InlineLoading = () => {
    
  return (
    <div className="flex items-baseline text-sm text-gray-500">
     <MoonLoader
     size={10}
     aria-label="Loading Spinner"
     /> Loading data...
    </div>
  )
};

export default InlineLoading;
