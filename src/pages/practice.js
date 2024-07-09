import React, { useState } from "react";

const CvUpload = () => {
  const [name, setName] = useState('');
  const [tech, setTech] = useState([]);
  const [level, setLevel] = useState('');
  const [salaryExp, setSalaryExp] = useState('');
  const [exp, setExp] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [ref, setRef] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Validate file type
    const allowedTypes = ["application/msword", "application/pdf", "image/jpeg", "image/png"];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      // Validate file size (up to 10MB)
      if (selectedFile.size <= 10 * 1024 * 1024) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError('File size exceeds 10MB limit.');
      }
    } else {
      setError('Invalid file type. Please upload Doc, PDF, JPEG, or PNG files.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const techList = tech.join(', ');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('tech', techList);
    formData.append('level', level);
    formData.append('salaryexp', salaryExp);
    formData.append('exp', exp);
    formData.append('number', number);
    formData.append('email', email);
    formData.append('ref', ref);
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await fetch('https://swcstgbe.cellapp.co/api/store/cv', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('CV uploaded successfully.');
      } else {
        setError(result.msg || 'Upload failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleTechChange = (techName) => {
    setTech((prevTech) =>
      prevTech.includes(techName)
        ? prevTech.filter((tech) => tech !== techName)
        : [...prevTech, techName]
    );
  };

  return (
    <div className='w-full h-full grid bg-[#ffffff]'>
      <div className='p-4 flex flex-col justify-center items-center h-screen'>
        <form onSubmit={handleSubmit} className="w-[350px] sm:w-[900px] h-full items-center rounded-sm border-[#f8f8f8] px-[80px] pt-[10px] m-[0px] shadow-xl">
          <div className="items-center mt-[25px]">
            <h6 className="flex items-center justify-center text-[33px] font-bold text-[#3694e6]">
              Upload Your CV
            </h6>
          </div>
          <div className="mt-[20px] text-[17px] border-2 rounded-lg border-[#dadada] p-1">
            <label className="input input-bordered flex items-center gap-2 rounded-md">
              <input
                type="text"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-[20px] text-[17px]">
            <label className="input input-bordered flex items-center gap-2 mt-2 text-[#A9A9A9] border-2 rounded-lg border-[#dadada] p-1">
              <span className="text-[#A9A9A9]">Technologies</span>
              <label className="flex items-center pl-4">
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded" onChange={() => handleTechChange('ReactJS')} />
                <span className="pl-2">ReactJS</span>
              </label>
              <label className="flex items-center pl-4">
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded" onChange={() => handleTechChange('QA')} />
                <span className="pl-2">QA</span>
              </label>
              <label className="flex items-center pl-4">
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded" onChange={() => handleTechChange('Java')} />
                <span className="pl-2">Java</span>
              </label>
            </label>
          </div>
          <div className='flex flex-col mb-4 mt-[20px]'>
            <div className='relative text-[#A9A9A9] text-[17px] text-left border-2 rounded-lg border-[#dadada] p-1'>
              Level:
              <select className="text-[#A9A9A9]" name='level' value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">&nbsp;&nbsp;&nbsp;------</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
              </select>
            </div>
          </div>
          <div className="mt-[20px] text-[17px] border-2 rounded-lg border-[#dadada] p-1">
            <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf] bg-[#ffffff]">
              <input
                type="number"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                required
                placeholder="Experience"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-[20px] text-[17px] border-2 rounded-lg border-[#dadada] p-1">
            <label className="input input-bordered flex items-center gap-2 border-[#cfcfcf] bg-[#ffffff]">
              <input
                type="number"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                required
                placeholder="Salary Expectations"
                value={salaryExp}
                onChange={(e) => setSalaryExp(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-[20px] text-[17px]">
            <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
              <input
                type="number"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                required
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-[20px] text-[17px]">
            <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
              <input
                type="email"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-[20px] text-[17px]">
            <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
              <input
                type="email"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                required
                placeholder="Reference's email"
                value={ref}
                onChange={(e) => setRef(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-[20px] text-[17px]">
            <label className="input input-bordered flex items-center gap-2 border-2 rounded-lg border-[#dadada] p-1">
              <input
                type="file"
                accept=".doc, .docx, .pdf, .jpeg, .jpg, .png"
                className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                onChange={handleFileChange}
              />
            </label>
            {file && <p className="text-[#4CAF50] mt-[10px]">Selected file: {file.name}</p>}
          </div>

          {error && <p className="text-red-500 mt-[20px]">{error}</p>}
          {success && <p className="text-green-500 mt-[20px]">{success}</p>}

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

export default CvUpload;
