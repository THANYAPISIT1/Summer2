import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNav from '../../Components/Layouts/TopNav';
import Sidebar from '../../Components/Layouts/Sidebar';
import Select from 'react-select';


function CustomerEdit() {
  const [name, setName] = useState('Champ');
  const [email, setEmail] = useState('champ489245@gmail.com');
  const [level, setLevel] = useState('Gold');
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New customer added:', { name, level, email });
    setName('');
    setLevel('');
    setEmail('');
    navigate('/customers');
  };

  const handleDelete = () => {
    
    console.log('Deleting user...')
  }

  useEffect(() => {
    console.log('Component mounted or updated');
  }, []);
  

  return (
    <div>
      <TopNav />
      <Sidebar />
      <div className="flex flex-col ml-64 mt-16 py-3">
        <div className="flex justify-between items-center py-4 px-4 pl-16 bg-write-200 border-b border-gray-200">
          <h2 className="text-black font-bold text-xl">{name}</h2>
          <div className='flex gap-2'>
            <button className='bg-red-500 hover:bg-red-700 text-white no-underline py-2 px-4 rounded cursor-pointer' onClick={handleDelete}>Delete</button>
          <Link><button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button></Link>
          </div>
        </div>
        <div className="mx-9 py-4 px-4 pl-8 border-b border-l border-r border-gray-200">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="flex mb-4">
              <label
                className="content-center text-black text-sm font-bold mr-2"
                htmlFor="level"
              >
                Level:
              </label>
              <Select
                placeholder={level}
                options={levelOptions}
                value={levelOptions.find((option) => option.value === level)}
                onChange={handleChange}
                className="basic-multi-select my-4 w-max "
              />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerEdit;
