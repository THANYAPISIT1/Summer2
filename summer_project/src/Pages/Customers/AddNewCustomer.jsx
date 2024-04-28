import { useState, useEffect } from 'react';




function AddNewCustomer() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New customer added:', { name, level, email, description });
    setName('');
    setLevel('');
    setEmail('');
    setDescription('');
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
    <form onSubmit={handleSubmit} className='ml-64 flex flex-col gap-2.5 p-5'>
      <h2 className='font-bold font-sans text-2xl mb-4'>Add New Customer</h2>
      <label htmlFor="name" className='flex font-bold font-sans text-base'>Name</label>
      <input className='p-2.5 border border-gray-300 rounded-2xl font-sans text-base'
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

        <div className="mb-4">
        <label className="block text-black font-bold font-sans text-base mb-2 " htmlFor="level">
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
  );
}

export default AddNewCustomer;

