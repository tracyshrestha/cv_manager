import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Login2 from '../pages/login2';

const cvUpload = () => {

  return (
    <div className=' md:grid grid-cols-5 w-screen h-full '>
      <Sidebar />
      <div className='col-span-4 full'>
        <Login2 />
      </div>
    </div >
  );
};

export default cvUpload;
