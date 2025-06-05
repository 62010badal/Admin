import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className="w-full h-auto bg-[#f1f1f1] relative overflow-hidden" >
            <IoSearch className='absolute top-[13px] left-[10px] z-50 pointer-events-none opacity-50'/>
                <input type='text' placeholder='Search here...' className='w-full h-[40px] focus:outline-none focus:border-[rgba(0,0,0,0.5)] pl-8 p-2 text-[13px] bg-[#f1f1f1] border border-[rgba(0,0,0,0.1)] rounded-md'/>
        </div>
    )
}

export default SearchBox;