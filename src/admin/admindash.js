import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import absorbed from '../assets/absorbed.svg'


const adminDash = () => {

  return (
    <div className=' md:grid grid-cols-5 w-screen h-full '>
      <Sidebar />
      <div className='col-span-4 full'>
        <div className=' h-screen flex  flex-col justify-center items-center bg-[#ffffff] '>

          <div className='flex justify-center items-center sm:h-[80px] sm:w-full h-[25px] w-[350px] rounded-sm  '>
            <h2 className='sm:text-[40px] text-[25px] font-bold pb-10 text-gray-700 '>Welcome to your Dashboard</h2>
          </div>

          <div className='flex justify-center items-center  '>
            <img src={absorbed} alt="" class="self-center sm:h-[400px] h-[250px] pt-2" />
          </div>

        </div>
      </div>
    </div >
  );
};

export default adminDash;
