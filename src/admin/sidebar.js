import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logoutIcon from '../assets/logout.png';
import white_user from '../assets/white_user.png';
import uploadcv from '../assets/uploadcv.png';
import list from '../assets/list.png';
import interviewer from '../assets/interviewer.png';
import schedule from '../assets/schedule.png';
import assignment from '../assets/assignment.png';
import evaluation from '../assets/evaluation.png';
import pen from '../assets/pen.png';
import work from '../assets/work.png';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => isActive(path) ? "font-bold text-white bg-[#2d81ca]" : "font-bold text-white";

  return (
    <div className="flex h-full w-screen bg-[#fff]">
      {/* Sidebar */}
      <div className="flex h-full w-[300px] flex-col rounded-l-2xl text-white p-[16px]">
        <div className="flex h-full w-[225px] flex-col rounded-l-2xl bg-[#42a7ff] pt-[24px] text-white sticky top-0">

          <div>
            <Link to="/admindash">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/admindash")}`}>
                <img src={white_user} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Dashboard</h1>
              </div>
            </Link>
            <Link to="/cvupload">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/cvupload")}`}>
                <img src={uploadcv} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Upload CV</h1>
              </div>
            </Link>
            <Link to="/usercvlist">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/usercvlist")}`}>
                <img src={list} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">CV List</h1>
              </div>
            </Link>
            <Link to="/schinterview">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/schinterview")}`}>
                <img src={schedule} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Schedule Interview</h1>
              </div>
            </Link>
            <Link to="/interviewer">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/interviewer")}`}>
                <img src={interviewer} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Interviewer</h1>
              </div>
            </Link>
            <Link to="/assessmentasign">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/assessmentasign")}`}>
                <img src={assignment} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Upload Assessment</h1>
              </div>
            </Link>
            <Link to="/sendofferletter">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/sendofferletter")}`}>
                <img src={pen} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Send Offer</h1>
              </div>
            </Link>
            <Link to="/bgcheck">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/bgcheck")}`}>
                <img src={evaluation} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Evaluation</h1>
              </div>
            </Link>
            <Link to="/hiredcvlist">
              <div className={`mb-0 flex items-center pl-[15px] h-[58px] ${linkStyle("/hiredcvlist")}`}>
                <img src={work} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Hired CV Lists</h1>
              </div>
            </Link>
          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Bottom Section */}
          <div>
            <Link to="/">
              <div className={`mb-6 flex items-center pl-[15px] ${linkStyle("/signup")}`}>
                <img src={logoutIcon} alt="Icon" className="mr-2 h-[24px] opacity-70" />
                <h1 className="font-bold">Logout</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
