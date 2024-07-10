import React, { useState, useEffect } from 'react';

const InterviewerAdd = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('position', position);


        try {
            const response = await fetch('https://swcstgbe.cellapp.co/api/addInterviewer', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Interviewer added successfully.');
            } else {
                setError(result.msg || 'Add failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };



    return (


        <div className='col-span-4 h-full'>
            <div className='w-full h-full grid bg-[#ffffff]'>
                <div className='py-[20px] flex flex-col justify-center items-center h-screen my-12 '>
                    <form onSubmit={handleSubmit} className="w-[350px] sm:w-[900px] h-[700px] items-center rounded-sm border-[#f8f8f8] px-[20px] my-[100px] pb-14 shadow-xl">
                        <div className="items-center mt-[25px]">
                            <h6 className="flex items-center justify-center text-[33px] font-bold text-[#3694e6]">
                                Add Interviewer
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
                        <div className="mt-[20px] text-[17px] border-2 rounded-lg border-[#dadada] p-1">
                            <label className="input input-bordered flex items-center gap-2 rounded-md">
                                <input
                                    type="text"
                                    className="grow border-none outline-none focus:border-none focus:ring-0 focus:outline-none text-[#A9A9A9]"
                                    required
                                    placeholder="Position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                            </label>
                        </div>

 
     



   

                        {error && <p className="text-red-500 mt-[20px]">{error}</p>}
                        {success && <p className="text-green-500 mt-[20px]">{success}</p>}

                        <div className="flex flex-col items-center mt-[30px]">
                            <button type="submit" className="relative w-full rounded-md bg-[#42a7ff] py-3 text-center font-bold text-white hover:bg-[#4D6B9C]">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default InterviewerAdd;
