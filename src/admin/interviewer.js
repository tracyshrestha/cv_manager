import React, { useState, useEffect } from 'react';

const UserCvList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swcstgbe.cellapp.co/api/intlists', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
          },
        });

        const result = await response.json();
        if (Array.isArray(result)) {
          setUsers(result);
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
          <h6 className="mt-[-8px] text-[48px] font-bold text-[#42a7ff]">Interviewer List</h6>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-[#cecece] bg-white text-[14px] text-black px-8">
        <table className="table-auto w-full">
          <thead className="text-black">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Date & Time</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-center w-2/6">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.position}</td>
                <td className="px-4 py-2">{user.datetime}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td className="px-4 py-2 text-center w-2/6">
                  <button className="rounded-lg bg-white border border-[#26ce4a] px-4 py-2 font-semibold text-[#26ce4a] hover:bg-[#26ce4a] hover:text-white">Contact</button>
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

export default UserCvList;
