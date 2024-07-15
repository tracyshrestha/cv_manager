import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mailLineIcon from '../assets/mail-line.png';
import vectorIcon from '../assets/vector.png';
import LoginImage from '../assets/LoginImage.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isTokenSet, setIsTokenSet] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsTokenSet(true)
    }
  }, [])
  useEffect(() => {
    if (isTokenSet) {
      navigate('/admindash')
    }
  }, [isTokenSet])


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://swcstgbe.cellapp.co/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token); // Save token to local storage
        setIsTokenSet(true)

      } else {
        setError(result.msg || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };


  return (
    <div className="w-screen h-screen grid grid-cols-1 xl:grid-cols-2 bg-[#fde5e5]">
      <div className="p-4 flex flex-col justify-center items-center bg-blue-100 h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-[350px] sm:w-[520px] h-[418px] items-center rounded-sm border-[#f8f8f8] bg-white px-[60px] pt-[20px] m-[107px] shadow-xl"
        >
          <div className="items-center mt-[40px]">
            <h6 className="flex items-center justify-center text-[30px] font-bold text-black">
              Log In
            </h6>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#A9A9A9] bg-[#F8F8FF]">
              <img
                src={mailLineIcon}
                alt="Icon"
                className="h-4 w-4 opacity-70"
              />
              <input
                type="text"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-[20px]">
            <label className="input input-bordered flex items-center gap-2 border-[#A9A9A9] bg-[#F8F8FF]">
              <img
                src={vectorIcon}
                alt="Icon"
                className="h-4 w-4 opacity-70"
              />
              <input
                type="password"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9] text-[14px]"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {error && <p className="text-red-500 mt-[20px]">{error}</p>}
          <div className="flex flex-col items-center mt-[30px]">
            <button
              type="submit"
              className="relative w-full rounded-md bg-[#42a7ff] py-3 text-center font-bold text-white hover:bg-[#4D6B9C]"
            >
              Sign In
            </button>
          </div>
          <div className="mt-[30px] text-center text-gray-500">
            <p className="sm:text-l text-center text-[14px]">
              Don't have an account?
              <a
                href="/signup"
                className="text-[15px] text-[#42ADF0] hover:text-[#4D6B9C] sm:text-[15px]"
              >
                Create account
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="hidden xl:block p-14 bg-white">
        <img className="inline auto" src={LoginImage} alt="Login" />
      </div>
    </div>
  );
}

export default Login;
