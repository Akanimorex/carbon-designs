import React from "react"

const Button = ({ variant, disabled }) => {
  const variantStyles = 
  variant == "default"?
  "bg-blue":
  variant == "danger"?
  "bg-[red]":
  variant == "primary"?
  "bg-blue-600":
  variant == "secondary"?
  "border border-blue-400":""


  return (
    <div>
      { disabled ? (<button 
      className={`px-4 py-2 font-semibold  text-white bg-gray-400 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
      >Click Me
      </button>):
      (<button 
        disabled="true"
         className={`px-4 py-2 font-semibold text-white ${variantStyles} rounded `}
        >Click Me
        </button>)
      }
    </div>
  )
};

export default Button;
