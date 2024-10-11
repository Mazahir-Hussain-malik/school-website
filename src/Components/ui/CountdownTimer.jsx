import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const daysToAdd = 365; 


  const targetDate = new Date(year, month, day + daysToAdd);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Times up!</span>;
    } else {
      return (
        <ul className='flex justify-start items-center my-4 '>
          <li className='border-x border-x-[#EEEEEE] font-medium lg:text-5xl md:text-4xl sm:text-3xl text-xl text-[#0E9B68] lg:px-6 md:px-5 sm:px-4 px-2  capitalize leading-[0.3px] '>
            {days}
            <h2 className='text-[#666666] md:text-xl text-base mt-2 '>Days</h2>

          </li>
          <li className='border-r border-r-[#EEEEEE] font-medium lg:text-5xl md:text-4xl sm:text-3xl text-xl text-[#0E9B68] lg:px-6 md:px-5 sm:px-4 px-2  capitalize '>
            {hours}
            <h2 className='text-[#666666] md:text-xl text-base mt-2'>Hours</h2>

          </li>
          <li className='border-r border-r-[#EEEEEE] font-medium lg:text-5xl md:text-4xl sm:text-3xl text-xl text-[#0E9B68] lg:px-6 md:px-5 sm:px-4 px-2  capitalize '>
            {minutes}
            <h2 className='text-[#666666] md:text-xl text-base mt-2'>Minutes</h2>

          </li>
          <li className='border-r border-r-[#EEEEEE] font-medium lg:text-5xl md:text-4xl sm:text-3xl text-xl text-[#0E9B68] lg:px-6 md:px-5 sm:px-4 px-2  capitalize '>
            {seconds}
            <h2 className='text-[#666666] md:text-xl text-base mt-2'>Seconds</h2>

          </li>
        </ul>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;