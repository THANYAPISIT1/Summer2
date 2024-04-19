import  { useState, useEffect } from 'react';

function CustomerEdit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');

  

  useEffect(() => {
    
    fetch('http://localhost:5173/CustomersEdit')
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setEmail(data.email);
      });
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
    
  };

  

  return (
    <div className="flex flex-col w-full ml-64">
      <div className='flex justify-between items-center py-4 px-4 pl-16 bg-write-200 text-gray-700 font-bold text-xl border-b border-gray-400'>
        <h2 >{name}</h2>
        <div className='flex gap-2'>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save
      </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="level">
          Level:
        </label>
        <select
          id="level"
          name="level"
          value={level}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
          <option value="Platinum">Platinum</option>
          <option value="Diamond">Diamond</option>
        </select>
      </div>
      
    </div>
  );
}

export default CustomerEdit;
