// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const UserCvView = () => {
//   const location = useLocation();
//   const { id } = location.state;

//   return (
//     <div>
//       <h1>CV View</h1>
//       <p>Viewing CV for user ID: {id}</p>
//       {/* Fetch and display user details using the ID */}
//     </div>
//   );
// };

// export default UserCvView;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserCvView = () => {
  const { id } = useParams();
  const [cvData, setCvData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCvDetails = async () => {
      try {
        const response = await fetch(`https://swcstgbe.cellapp.co/api/cvlists/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
          },
        });

        const result = await response.json();
        if (response.ok && result && result[1]?.vdata) {
          setCvData(result[1].vdata);
        } else {
          setError(result.message || 'Failed to fetch CV details.');
        }
      } catch (error) {
        setError('An error occurred while fetching CV details.');
      }
    };

    fetchCvDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!cvData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='col-span-4 h-full'>
      <div className='w-full h-full grid bg-[#ffffff]'>
        
        <div className='py-[20px] flex flex-col justify-center items-center h-screen my-12'>
          <div className="w-[350px] sm:w-[900px] h-[700px] items-center rounded-sm border-[#f8f8f8] px-[20px] my-[100px] pb-14 shadow-xl">
            <div className="items-center mt-[25px]">
              <h6 className="flex items-center justify-center text-[33px] font-bold text-[#3694e6]">
                View CV
              </h6>
            </div>
            <div className="mt-[20px] text-[17px] border-2 rounded-lg border-[#dadada] p-1">
              <label className="input input-bordered flex items-center gap-2 rounded-md">
                <span className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]">
                  Name: {cvData.name}
                </span>
              </label>
            </div>
            <div className="mt-[20px] text-[17px]">
              <label className="input input-bordered flex items-center gap-2 mt-2 text-[#A9A9A9] border-2 rounded-lg border-[#dadada] p-1">
                <span className="text-[#A9A9A9]">Technologies: {cvData.tech}</span>
              </label>
            </div>
            <div className='flex flex-col mb-4 mt-[20px]'>
              <div className='relative text-[#A9A9A9] text-[17px] text-left border-2 rounded-lg border-[#dadada] p-1'>
                Level: {cvData.level}
              </div>
            </div>
            <div className="mt-[20px] text-[17px] border-2 rounded-lg border-[#dadada] p-1">
              <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf] bg-[#ffffff]">
                <span className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]">
                  Experience in years: {cvData.exp}
                </span>
              </label>
            </div>
            <div className="mt-[20px] text-[17px] border-2 rounded-lg border-[#dadada] p-1">
              <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf] bg-[#ffffff]">
                <span className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]">
                  Salary Expectations: {cvData.salaryexp}
                </span>
              </label>
            </div>
            <div className="mt-[20px] text-[17px]">
              <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
                <span className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]">
                  Number: {cvData.number}
                </span>
              </label>
            </div>
            <div className="mt-[20px] text-[17px]">
              <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
                <span className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]">
                  Email: {cvData.email}
                </span>
              </label>
            </div>
            <div className="mt-[20px] text-[17px]">
              <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
                <span className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]">
                  Reference's email: {cvData.ref}
                </span>
              </label>
            </div>
            <div className="mt-[20px] text-[17px]">
              <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
                <span className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]">
                  CV File: <a href={`https://swcstgbe.cellapp.co/uploads/${cvData.image}`} target="_blank" rel="noopener noreferrer">{cvData.image}</a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCvView;
