import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export const Card = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0
      });
    
      const handleIncrement = (category) => {
        setGuests({ ...guests, [category]: guests[category] + 1 });
      };
    
      const handleDecrement = (category) => {
        if (guests[category] > 0) {
          setGuests({ ...guests, [category]: guests[category] - 1 });
        }
      };
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const closeDropdown = () => {
        setIsOpen(false);
      };
    
  
    return (
      <div className='flex flex-col h-[15rem] bg-gray-100 p-4 border-[1px] border-black gap-4'>
        <h1>$600 <span>night</span></h1>
        <table className="border-[1px] border-gray-400">
          <tbody>
            <tr className='flex'>
            <th className='flex flex-col font-normal border-r-2 border-b-2 border-gray-400 px-10 py-2'>CHECK-IN<span className='text-sm'>Add date</span></th>

              <th className='flex flex-col font-normal border-b-2 border-gray-400 px-10 py-2'>CHECK-OUT<span className='text-sm'>Add date</span></th>
            </tr>
            <tr>
                <td className='flex justify-between '>
                <button className='flex flex-col px-10 py-2'>GUESTS <span className='text-sm'>1 guest</span></button>
                <button className='px-4'  onClick={toggleDropdown}><IoIosArrowDown />
</button>
</td>
</tr>

            <div>
      {Object.entries(guests).map(([category, count]) => (
        <div className='flex justify-between px-10' key={category}>
             <label>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
             <div>
          <span onClick={() => handleDecrement(category)}>-</span>
          <span>{count}</span>
          <span onClick={() => handleIncrement(category)}>+</span>
        </div>

        </div>
      ))}
    </div>
                    <button onClick={closeDropdown}>Close</button>
          </tbody>

                    </table>

      </div>

    );
  };
  