import React from 'react'
import { CiWifiOn } from "react-icons/ci";
import { PiTelevisionSimple } from "react-icons/pi";
import { PiBathtubBold } from "react-icons/pi";


export const Amenties = () => {
  return (
    <>
    <div className='flex flex-col font-display gap-4 p-3 '>
<h1 className='font-semibold'>What this place offers</h1>
<div className='flex gap-[8rem]'>
    <div className='flex flex-col gap-2'>
<h1 className='flex items-center justify-center gap-2'><img className='h-[1.5rem]' src='https://tse2.mm.bing.net/th?id=OIP.L8O_e8JbwUyTS-gVYYxNpgHaG-&pid=Api&P=0&h=220'/>Sea view</h1>
<h1 className='flex gap-2 '><CiWifiOn className='h-[1.5rem] w-[1.5rem]' />Wifi</h1>
<h1 className='flex gap-2'> 
<PiTelevisionSimple className='h-[1.5rem] w-[1.5rem]' />
  TV</h1>
<h1 className='flex gap-2'><PiBathtubBold className='h-[1.5rem] w-[1.5rem]'  />Bathtub</h1>
<h1 className='flex gap-2'><img className='h-[1.5rem]' src='https://tse1.mm.bing.net/th?id=OIP.USvI3ClRqi4k9fSyoOK3RAHaHa&pid=Api&P=0&h=220'/>Hair dryer</h1>
</div>
<div className='flex flex-col gap-2'>
<h1 className='flex gap-2'><img className='h-[1.5rem]' src='https://tse2.mm.bing.net/th?id=OIP.L8O_e8JbwUyTS-gVYYxNpgHaG-&pid=Api&P=0&h=220'/>Beach access- Beachfront</h1>
<h1 className='flex gap-2'><img className='h-[1.5rem]' src='https://tse1.mm.bing.net/th?id=OIP.SmXP0NOoSpM0He6aBJnF5wHaHa&pid=Api&P=0&h=220'/>Shared pool -</h1>
<h1 className='flex gap-2'><img className='h-[2rem]' src='https://tse3.mm.bing.net/th?id=OIP.ifHk8NqRsryWLhVUNaIm9QHaHa&pid=Api&P=0&h=220'/>Air conditioning</h1>
<h1 className='flex gap-2'><img className='h-[1.5rem]' src='https://tse1.mm.bing.net/th?id=OIP.6N6Iz2EYBYBIYwyKLxRW-wAAAA&pid=Api&P=0&h=220'/>Private patio or balcony</h1>
<strike className='flex gap-2'>
  <img className='h-[1.5rem]' src='https://tse4.mm.bing.net/th?id=OIP.FsR30wNYhlbYprMFnCFhkAHaHa&pid=Api&P=0&h=220'/>Carbon monoxide alarm</strike>
</div>

</div>
    </div><hr className="bg-black h-[1px] w-[50%]" />
    </>
  )
}
