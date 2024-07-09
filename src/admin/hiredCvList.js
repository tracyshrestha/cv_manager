import React, { useState, useEffect } from 'react';
import searchIcon from '../assets/search.png';
import arrowBack from '../assets/arrow_back.png';
import arrowBack2 from '../assets/arrow_back2.png';

const HiredCvList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swcstgbe.cellapp.co/api/cv/hired', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
          },
        });

        const result = await response.json();
        if (result[1] && Array.isArray(result[1].vdata)) {
          setUsers(result[1].vdata);
        } else {
          console.error('Unexpected response format:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-screen w-[1000px] bg-[#ffffff]">
      <div className="flex flex-col bg-white px-[30px] pt-[20px] shadow-xl">
        <div className="mt-[-5px] bg-[#ffffff]">
          <h6 className="mt-[-8px] text-[48px] font-bold text-[#42a7ff]">Hired List</h6>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-[#cecece] bg-white text-[14px] text-black px-8">
        <table className="table-auto w-full">
          <thead className="text-black">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Experience</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Tech</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-center w-2/6">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.exp}</td>
                <td className="px-4 py-2">{user.salaryexp}</td>
                <td className="px-4 py-2">{user.tech}</td>
                <td className="px-4 py-2">{user.level}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td className="px-4 py-2 text-center w-2/6">
                  <button className="rounded-lg bg-white border border-[#3758F9] px-4 py-2 font-semibold text-[#3758F9] hover:bg-blue-700 hover:text-white">Edit</button>
                  <button className="rounded-lg bg-white border border-[#DB0F28] px-4 py-2 font-semibold text-[#DB0F28] hover:bg-[#DB0F28] hover:text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="flex-column flex flex-wrap items-center justify-between pt-4 md:flex-row" aria-label="Table navigation">
        <ul className="inline-flex h-8 w-full justify-center -space-x-px text-sm rtl:space-x-reverse">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
            <li key={index + 1}>
              <a
                href="#"
                onClick={() => paginate(index + 1)}
                className={`flex h-8 items-center justify-center border bg-white px-3 leading-tight ${
                  currentPage === index + 1 ? 'bg-[#3758F9] text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HiredCvList;
