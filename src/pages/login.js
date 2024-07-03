import React, { useState } from "react";
import mailLineIcon from '../assets/mail-line.png';
import vectorIcon from '../assets/vector.png';

function Login() {

  return (
    <div className="grid h-full w-screen grid-cols-1 bg-[#badfff]">
      <div className="flex flex-col items-center justify-center">
        <form
          className="w-[350px] sm:w-[520px] h-[418px] items-center rounded-sm border-[#f8f8f8] bg-white px-[60px] pt-[20px] m-[107px] shadow-xl">

          <div className="items-center mt-[40px]">
            <h6 className="flex items-center justify-center text-[30px] font-bold text-black">
              Log In
            </h6>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#A9A9A9] bg-[#F8F8FF]">
              <img src={mailLineIcon} alt="Icon" className="h-4 w-4 opacity-70" />
              <input type="text" className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]" required placeholder="Email" />
            </label>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#A9A9A9] bg-[#F8F8FF]">
              <img src={vectorIcon} alt="Icon" className="h-4 w-4 opacity-70" />
              <input type="password" className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]" required placeholder="password" />
            </label>
          </div>
          
          <div className="flex flex-col items-center mt-[30px]">
            <button type="submit" className="hover:bold relative w-full rounded-md bg-[#42a7ff] py-3 text-center font-bold text-white hover:bg-[#4D6B9C]">
              Sign In
            </button>
          </div>

          <div className="mt-[30px] text-center text-gray-500">
            <p className="sm:text-l text-center text-[14px]">
              Don't have an account? 
              <a href="/signup" className="text-[15px] text-[#42ADF0] hover:text-[#4D6B9C] sm:text-[15px]">
                Create account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
