import React from 'react'
import { HiSearch } from "react-icons/hi";
import { FaGripLines } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


export const Nav = () => {
  return (
    <div className='flex items-center justify-evenly border-b-[1px] border-gray-[400] font-display'>
        <img className='h-[6rem]' src='https://mma.prnewswire.com/media/1121685/Airbnb_Logo.jpg?p=facebook'/>
        <div className='flex items-center justify-center gap-4 h-[3rem] border-[1px] border-gray-200 p-3 rounded-[2rem] '>
            <h1 className='font-bold'>Anywhere</h1>
            <h1 className='font-bold'>Any week</h1>
            <h1 className=' text-gray-400'>Add guests</h1>
            <span className=' flex items-center justify-center text-white h-[2rem] w-[2rem] bg-red-500 rounded-full'><HiSearch /></span>

        </div>
        <div className='flex items-center justify-center gap-5 '>
        <h1>Airbnb your home</h1>
        <div className='flex p-3 items-center border-[1px] border-gray-500 rounded-[2rem] gap-3'>
        <FaGripLines className='h-[1.5rem] w-[1.5rem]' />
        <span ><CgProfile className='h-[1.5rem] w-[1.5rem]'  />
</span>

        </div>
        </div>

    </div>
  )
}
