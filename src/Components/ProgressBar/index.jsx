import React from "react";


const ProgressBar = (props) => {
    return(
        <>
        <div className="w-[100px] h-auto bg-[#f1f1f1] overflow-hidden rounded-full">
            <span className={`flex items-center w-[${props.value}%] h-[8px] bg-blue-500} 
            ${props.type==="success" && "bg-green-600"} 
            ${props.type==="error" && "bg-red-600"}
            ${props.type==="yellow" && "bg-orange-400"} `}>

            </span>
        </div>
        </>
    )
}

export default ProgressBar;