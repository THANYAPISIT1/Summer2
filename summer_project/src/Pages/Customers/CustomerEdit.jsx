import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CustomerEdit() {
  const [name, setName] = useState('Champ');
  const [email, setEmail] = useState('champ489245@gmail.com');
  const [level, setLevel] = useState('');
  const [newName, setNewName] = useState('Champ');
  

   

  useEffect(() => {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      const { name, email, level } = JSON.parse(storedData);
      setName(name);
      setEmail(email);
      setLevel(level);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'level') {
      setLevel(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New customer added:', { name, level, email });
    setName('');
    setLevel('');
    setEmail('');
    setNewName(name);
    localStorage.setItem('profileData', JSON.stringify({ name, email, level }));
  };

  

  return (
    <div className="flex flex-col  ml-64">
      <div className='flex justify-between items-center py-4 px-4 pl-16 bg-write-200 border-b border-gray-400'>
        <h2 className=' text-black font-bold text-xl'>{newName}</h2>
        <Link><button onClick={handleSubmit} className='bg-blue-600 text-white no-underline py-2 px-4 rounded-custom cursor-pointer'>Save</button></Link>
      </div>
      <div className='mx-9 py-4 px-4 pl-8 border-b border-l border-r border-gray-400 '>
        <div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 "
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="flex mb-4">
        <label className="content-center text-gray-700 text-sm font-bold mr-2" htmlFor="level">
          Level:
        </label>
        <select
          id="level"
          name="level"
          value={level}
          onChange={handleChange}
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        >
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
          <option value="diamond">Diamond</option>
        </select>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default CustomerEdit;
