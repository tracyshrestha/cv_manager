import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserCvList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swcstgbe.cellapp.co/api/cvlists', {
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://swcstgbe.cellapp.co/api/delete/cv/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
      });

      const result = await response.json();
      if (result.status === 'success') {
        setUsers(users.filter(user => user.id !== id));
      } else {
        console.error('Error deleting data:', result.message);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleView = (id) => {
    navigate('/usercvview', { state: { id } });
  };

  return (
    <div className="h-screen w-[1000px] bg-[#ffffff]">
      <div className="flex flex-col bg-white px-[30px] pt-[20px] shadow-xl">
        <div className="mt-[-5px] bg-[#ffffff]">
          <h6 className="mt-[-8px] text-[48px] font-bold text-[#42a7ff]">CV List</h6>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-[#cecece] bg-white text-[14px] text-black px-8">
        <table className="table-auto mx-[-10px] w-full">
          <thead className="text-black">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Experience</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Tech</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-center w-[200px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.exp}</td>
                <td className="px-4 py-2">{user.salaryexp}</td>
                <td className="px-4 py-2">{user.tech}</td>
                <td className="px-4 py-2">{user.level}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td className="px-4 py-2 text-center w-[200px]">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="rounded-lg bg-[#42a7ff] border border-[#42a7ff] px-4 py-2 font-semibold hover:bg-[#2b43be] text-white"
                      onClick={() => handleView(user.id)}
                    >
                      Edit 
                    </button>
                    <button
                      className="rounded-lg bg-[#ff3e54] border border-[#ff3e54] px-4 py-2 font-semibold hover:bg-[#a80f21] text-white"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </div>
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
                className={`flex h-8 items-center justify-center border bg-white px-3 leading-tight ${currentPage === index + 1 ? 'bg-[#cfd7ff] text-[#3758F9]' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 '}`}
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
