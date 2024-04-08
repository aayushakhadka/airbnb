import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";


export const Detail = () => {
    const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (

    <div className='flex flex-col gap-2 p-2'>
              <div className="flex flex-col gap-2 ">
        <h1 className=" font-semibold text-xl mt-[1rem] ">
          Private room in resort in Malé, Maldives
        </h1>
        <h1>3 guests .1 bedroom .1 bed .1 shared bath</h1>
        <h1 className="flex items-center gap-2 ">
          {" "}
          <IoIosStar />
          No reviews yet
        </h1>
        <hr className="bg-black h-[1px] w-[50%]" />
        <div className="flex gap-2 p-2">
          <img
            src="https://a0.muscache.com/im/pictures/user/c74ad8cf-32dd-46ff-b5a0-10dec4892e4c.jpg?im_w=240"
            className="rounded-full h-[3rem] w-[3rem]"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">Hosted by sajjad</h1>
            <h3 className="text-sm">Superhost. 7 years hosting</h3>
          </div>
        </div>
        <hr className="h-[1px] w-[50%]" />
        <div className="flex flex-col gap-4 p-2">
          <div>
            <h1 className="font-semibold">Sajjad is a Superhost</h1>
            <h1 className="text-sm">
              Superhosts are experienced, highly rated Hosts.
            </h1>
          </div>
          <div>
            <h1 className="font-semibold">Dive right in</h1>
            <h1 className="text-sm">
              This is one of the few places in the area with a pool.
            </h1>
          </div>
        </div>
        <hr className="bg-black h-[1px] w-[50%]" />
      </div>
      <div className="flex flex-col gap-8 p-2">
        <p className="w-[30rem]">
          A modern Maldivian resort escape for world-class travellers in search
          of adventure, adrenaline and a truly remarkable holiday experience.
        </p>
        <div>
          <h1>> Water Bungalow at 4 star private Island Resort </h1>
          <h1>> Entire Place...</h1>
        </div>
        {/* Show More button */}
        <h1
          onClick={togglePopup}
          className=" cursor-pointer underline font-semibold"
        >
          Show More
        </h1>
      </div>
      <hr className="bg-black h-[1px] w-[50%]" />
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className=" flex flex-col gap-5 px-10 bg-white py-10 rounded-md">
            <h2 className="text-lg font-semibold">About this space</h2>
            <p className=" w-[40rem]">
              A modern Maldivian resort escape for world-class travellers in
              search of adventure, adrenaline and a truly remarkable holiday
              experience.
            </p>
            <div className=" flex flex-col gap-2">
              <h1>> Water Bungalow at 4 star private Island Resort</h1>
              <h1>> Entire Place</h1>
              <h1>> 95 SQM</h1>
              <h1>> Place is accessible by 45 minutes speedboat ride,</h1>
              <h1>> A number of Excursions & activities available</h1>
              <h1>> Maximum Occupancy 2 Adults 1 Child or 3 Adults</h1>
            </div>

            <h1 className="w-[30rem]">
              Kindly, ping me before sending reservation request to arrange
              transportation to & from Male International Airport.
            </h1>

            {/* Close button */}
            <button onClick={togglePopup} className=" cursor-pointer">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
