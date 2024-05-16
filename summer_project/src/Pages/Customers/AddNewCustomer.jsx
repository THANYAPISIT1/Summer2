import { useState } from 'react';
import axios from 'axios';
import TopNav from '../../Components/Layouts/TopNav';
import Sidebar from '../../Components/Layouts/Sidebar';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';


function AddNewCustomer() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // State for error message
  const [isLoading, setIsLoading] = useState(false); // State for loading
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

    // Basic validation
    if (!name || !level || !email) {
      setError('All fields are required');
      return;
    }

    const authToken = localStorage.getItem('token');

    try {
      setIsLoading(true); // Start loading
      setError(''); // Clear any previous errors

      await axios.post(
        'http://localhost:8000/customers',
        {
          CusName: name,
          CusEmail: email,
          CusLevel: level,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setMessage('Customer created successfully!');
      setName('');
      setLevel('');
      setEmail('');

      setTimeout(() => {
        navigate('/customers');
      }, 2000);
    } catch (error) {
      setError('Error creating customer. Please try again.');
      console.error('Error creating customer:', error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleReset = () => {
    setName('');
    setLevel('');
    setEmail('');
    setError(''); // Clear any previous errors
  };

  return (
    <div>
      <TopNav />
      <Sidebar />
      <div className='ml-64 mt-16 py-3'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2.5 p-5'>
          <h2 className='font-bold font-sans text-xl mb-4'>Add New Customer</h2>
          {message && <div className='mb-4 p-2 bg-green-500 text-white rounded'>{message}</div>}
          {error && <div className='mb-4 p-2 bg-red-500 text-white rounded'>{error}</div>}
          <div className='flex gap-2.5'>
            <div className='basis-1/2'>
              <label htmlFor='name' className='flex font-bold font-sans text-base mb-2.5'>
                Name
              </label>
              <input
                className='p-2.5 shadow appearance-none border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(event) => setName(event.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className='ml-2.5'>
              <label className='text-black font-bold font-sans text-base' htmlFor='level'>
                Level
              </label>
              <Select
                placeholder='Select Level'
                options={levelOptions}
                value={levelOptions.find((option) => option.value === level)}
                onChange={handleChange}
                className='basic-multi-select mt-2.5 w-max'
                isDisabled={isLoading}
              />
            </div>
          </div>
          <label htmlFor='email' className='flex font-bold font-sans text-base'>
            Email
          </label>
          <input
            className='p-2.5 shadow appearance-none border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isLoading}
          />
          <div className='flex flex-row-reverse gap-4 mt-4'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>
            <button
              type='button'
              onClick={handleReset}
              className='bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewCustomer;
