import moment from 'moment/moment';
import React, { useState } from 'react'
import { GrFormNextLink } from "react-icons/gr";

export const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  const [currentStartMonth, setCurrentStartMonth] = useState(moment());

  const renderCalendar = (startMonth) => {
    const months = [startMonth, moment(startMonth).add(1, 'month')];

    return months.map(month => {
      const startOfMonth = moment(month).startOf('month').startOf('week');
      const endOfMonth = moment(month).endOf('month').endOf('week');
      const currentDate = moment(startOfMonth);

      const cells = [];
      while (currentDate.isBefore(endOfMonth)) {
        const isCurrentMonth = currentDate.month() === month.month();
        if (isCurrentMonth) {
          cells.push(
            <div 
              key={currentDate} 
              className={`relative flex flex-col justify-center items-center p-2 cursor-pointer hover:bg-slate-800 hover:rounded-full hover:text-white ${currentDate.isSame(selectedDate, 'day') ? ' text-black' : ''}`}
              onClick={() => handleDateClick(currentDate)}
            >
              <span className={`${currentDate.isSame(selectedDate, 'day') ? 'font-semibold' : ''}`}>{currentDate.format('D')}</span>
              {currentDate.isSame(selectedDate, 'day') }
            </div>
          );
        } else {
          cells.push(
            <div 
              key={currentDate} 
              className="flex flex-col justify-center items-center p-2 "
            />
          );
        }
        currentDate.add(1, 'day');
      }

      return (
        <div key={month} className=" mt-4 p-4 bg-white shadow-md rounded-lg mr-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">{moment(month).format('MMMM YYYY')}</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {moment.weekdaysShort().map(day => (
              <div key={day} className="flex justify-center items-center py-2 text-sm font-semibold">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 mt-2">
            {cells}
          </div>
        </div>
      );
    });
  };

  const handleDateClick = date => {
    setSelectedDate(date);
  };

  const nextMonth = () => {
    setCurrentStartMonth(moment(currentStartMonth).add(2, 'months'));
    setSelectedDate(null); // Reset selected date when navigating to the next months
  };

  return (
    <>
    <div>
      <div className="flex">
        {renderCalendar(currentStartMonth)}
      </div>

      <div className='flex items-center justify-between w-[50%]'>
      <button className="px-4  text-white rounded-full mt-4 shadow-md" onClick={nextMonth}><GrFormNextLink className='h-[2rem] w-[2rem]' /></button>
      <h1 className=' underline'>Clear Dates</h1>
      </div>
    </div><hr className='bg-black mt-6'/>
    </>
  );
};


      
     
   