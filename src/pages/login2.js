import React, { useState } from "react";


const cvUpload = () => {
  return (
    <div className='w-full h-full grid  bg-[#ffffff]'>
      <div className='p-4 flex flex-col justify-center items-center h-screen'>
        <form className="w-[350px] sm:w-[900px] h-[600px] items-center rounded-sm border-[#f8f8f8] bg-white px-[60px] pt-[10px] m-[0px] shadow-xl">
          <div className="items-center mt-[25px]">
            <h6 className="flex items-center justify-center text-[30px] font-bold text-black">
              Upload Your CV
            </h6>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf]  bg-[#ffffff]">
          
              <input
                type="text"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]"
                required
                placeholder="Name"
              />
            </label>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#A9A9A9] bg-[#ffffff] mt-2 text-[#A9A9A9] text-[14px]">
            
              <span className="text-[#A9A9A9] text-[14px]">Technologies</span>   <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded" />
                <span className="">Option 1</span>
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded" />
                <span className="">Option 1</span>
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded" />
                <span className="">Option 1</span>
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded" />
                <span className="">Option 1</span>
              </label>
            </label>
            <div className="">
           

            </div>
          </div>
          <div className='flex flex-col mb-4 '>
            <div className=' relative text-[#A9A9A9] p-2 text-left'>
              Level:
              <select className="text-[#A9A9A9]" name='service' >
                <option value="">&nbsp;&nbsp;&nbsp;------</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>

            </div>

          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf]  bg-[#ffffff]">
            
              <input
                type="number"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]"
                required
                placeholder="Salary Expectations"
              />
            </label>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf]  bg-[#ffffff]">
             
              <input
                type="number"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]"
                required
                placeholder="Number"
              />
            </label>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf]  bg-[#ffffff]">
             
              <input
                type="email"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]"
                required
                placeholder="Email"
              />
            </label>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf]  bg-[#ffffff]">
             
              <input
                type="email"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]"
                required
                placeholder="Reference's email"
              />
            </label>
          </div>          


          <div className="flex flex-col items-center mt-[30px]">
            <button type="submit" className="relative w-full rounded-md bg-[#42a7ff] py-3 text-center font-bold text-white hover:bg-[#4D6B9C]">
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default cvUpload;