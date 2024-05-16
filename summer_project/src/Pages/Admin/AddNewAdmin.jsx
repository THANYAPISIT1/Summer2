import { useState, useEffect } from 'react';
import TopNav from '../../Components/Layouts/TopNav';
import Sidebar from '../../Components/Layouts/Sidebar';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

function AddNewAdmin() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New Admin added:', { name, level, email, description });
    setName('');
    setLevel('');
    setEmail('');
    setDescription('');
    navigate("/Admin");
  };

  const handleReset = (event) => {
    event.preventDefault();
    setName('');
    setLevel('');
    setEmail('');
    setDescription('');
  }

  useEffect(() => {
    console.log('Component mounted or updated');
  }, []);

  return (
    <div>
      <TopNav />
      <Sidebar />
      <div className='ml-64 mt-16 py-3'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2.5 p-5'>
      <h2 className='font-bold font-sans text-2xl mb-4'>Add New Admin</h2>
      <label htmlFor="name" className='flex font-bold font-sans text-base'>Name</label>
      <input className='p-2.5 border border-gray-300 rounded-2xl font-sans text-base'
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

        <div >
        <label className="block text-black font-bold font-sans text-base  " htmlFor="level">
          Level:
        </label>
        <Select
                placeholder="Select level"
                options={levelOptions}
                value={levelOptions.find((option) => option.value === level)}
                onChange={handleChange}
                className="basic-multi-select my-4 w-full max-w-64"
              />
      </div>

      <label htmlFor="email" className='flex  font-bold font-sans text-base'>Email</label>
      <input className='p-2.5 border border-gray-300 rounded-2xl font-sans text-base'
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="description" className='flex  font-bold font-sans text-base'>Description</label>
      <textarea className='p-2.5 border border-gray-300 rounded-2xl font-sans text-base'
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      
      <div className='flex gap-2'>
         <div className='flex gap-2'>
          <button onClick={handleReset} className="bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Cancel
      </button>
        </div>
        <div className='flex gap-2'>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save
      </button>
        </div>
      </div>
    </form>
      </div>
    </div>
  );
}

export default AddNewAdmin;

