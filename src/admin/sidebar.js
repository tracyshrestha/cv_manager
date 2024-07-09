import React from 'react';
import logoutIcon from '../assets/logout.png';
import white_user from '../assets/white_user.png';
import uploadcv from '../assets/uploadcv.png';
import list from '../assets/list.png';
import schedule from '../assets/schedule.png';
import assignment from '../assets/assignment.png';
import evaluation from '../assets/evaluation.png';
import pen from '../assets/pen.png';
import work from '../assets/work.png';


const Sidebar = () => {
  return (
    <div className="flex h-screen w-screen bg-[#fff]">
      {/* Sidebar */}
      <div className="flex h-full w-[300px] flex-col rounded-l-2xl text-white p-[16px]">
        <div className="flex h-full w-[198px] flex-col rounded-l-2xl bg-[#42a7ff] pt-[24px] text-white sticky top-0">

          <div>
            <a href="/admindash">
              <div className="mb-0 flex items-center pl-[15px] bg-[#2d81ca] h-[58px]">
                <img src={white_user} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Dashboard</h1>
              </div>
            </a>
            <a href="/cvupload">
              <div className="mb-6 mt-[17px] flex items-center pl-[15px] ">
                <img src={uploadcv} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Upload CV</h1>
              </div>
            </a>
            <a href="/signup">
              <div className="mb-6 mt-[25px] flex items-center pl-[15px] ">
                <img src={list} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">CV List</h1>
              </div></a>
            <a href="/signup">
              <div className="mb-6 mt-[25px] flex items-center pl-[15px] ">
                <img src={schedule} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Schedule Interview</h1>
              </div></a>
            <a href="/signup">
              <div className="mb-6 mt-[25px] flex items-center pl-[15px] ">
                <img src={assignment} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Upload Assessment</h1>
              </div></a>
            <a href="/signup">
              <div className="mb-6 mt-[25px] flex items-center pl-[15px] ">
                <img src={evaluation} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Evaluation</h1>
              </div></a>
            <a href="/signup">
              <div className="mb-6 mt-[25px] flex items-center pl-[15px] ">
                <img src={pen} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Send Offer</h1>
              </div></a>
            <a href="/signup">
              <div className="mb-6 mt-[25px] flex items-center pl-[15px] ">
                <img src={work} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Hired CV Lists</h1>
              </div></a>

          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Bottom Section */}
          <div>
            <a href="/signup">
              <div className="mb-6 flex items-center pl-[15px]">
                <img src={logoutIcon} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Loggout</h1>
              </div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;










