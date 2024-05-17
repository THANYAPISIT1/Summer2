import { useState } from 'react';
import axios from 'axios';
import TopNav from '../../Components/Layouts/TopNav';
import Sidebar from '../../Components/Layouts/Sidebar';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Button } from "@nextui-org/react";

function AddNewCustomer() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for success message
  const navigate = useNavigate();

  const levelOptions = [
    { value: 'Silver', label: 'Silver' },
    { value: 'Gold', label: 'Gold' },
    { value: 'Platinum', label: 'Platinum' },
    { value: 'Diamond', label: 'Diamond' },
  ];

  const handleChange = (selectedOption) => {
    setLevel(selectedOption.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authToken = localStorage.getItem('token'); // Retrieve the token from localStorage

    try {
      await axios.post(
        'http://localhost:8000/customers',
        {
          CusName: name,
          CusEmail: email,
          CusLevel: level
        },
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );

      setMessage('Customer created successfully!');

      setName('');
      setLevel('');
      setEmail('');

      setTimeout(() => {
        navigate("/customers");
      }, 2000);

    } catch (error) {
      console.log(name);
      console.error('Error creating customer:', error);
      setMessage('Error creating customer. Please try again.'); // Set error message
    }
  };

    const handleReset = () => {
    setName('');
    setLevel('');
    setEmail('');
  };
  

  return (
    <div>
      <TopNav />
      <Sidebar />
      <div className='ml-64 mt-16 py-3'>
        {message && (
          <div className={`mb-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className='flex flex-col gap-2.5 p-5'>
          <h2 className='font-bold font-sans text-xl mb-4'>Add New Customer</h2>
          <div className='flex gap-2.5'>
            <div className='basis-1/2'>
              <label htmlFor="name" className='flex font-bold font-sans text-base mb-2.5'>Name</label>
              <input
                className='p-2.5 shadow appearance-none border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='ml-2.5'>
              <label className="text-black font-bold font-sans text-base" htmlFor="level">Level</label>
              <Select
                placeholder="Select Level"
                options={levelOptions}
                value={levelOptions.find((option) => option.value === level)}
                onChange={handleChange}
                className="basic-multi-select mt-2.5 w-max"
              />
            </div>
          </div>
          <label htmlFor="email" className='flex font-bold font-sans text-base'>Email</label>
          <input
            className='p-2.5 shadow appearance-none border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className='flex flex-row-reverse gap-4 mt-4'>
            <button
              type="submit"
              
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <Button color="danger" variant="light" onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewCustomer;

