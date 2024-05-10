import { Link } from 'react-router-dom'
import Select from 'react-select';
import { useState, useEffect } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import TopNav from '../../Components/Layouts/TopNav';
import Sidebar from '../../Components/Layouts/Sidebar';


const Customer = () => {

  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  

   useEffect(() => {
    setName('Champ');
    setLevel('Gold');
    setEmail('champ489245@gmail.com');
  }, []);

  const customStyles = {
  control: base => ({
    ...base,
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem', 
    minHeight: 'calc(2.25rem + 2px)', 
    boxShadow: 'none', 

  }),
};

  const tags = [
        {label:'Silver', value:'silver'},
        {label:'Gold', value:'Gold'},
        {label:'Platinum', value:'Platinum'},
        {label:'Diamond', value:'Diamond'}
    ];

  const levelColors = {
     
    'Silver': 'bg-custom-silver',
    'Gold': 'bg-custom-yellow',
    'Platinum': 'bg-custom-platinum',
    'Diamond': 'bg-custom-diamond',
  };


  return (
    <div>
        <TopNav />
        <Sidebar />
      <div className='ml-64 mt-16 py-3'>

          <header className="flex justify-between items-center font-bold bg-white pl-8 px-2 py-4 mb-4 border-b border-gray-200 ">
            <h2 className="text-black text-xl">Customers</h2>
            <Link to="/customer/add" ><button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add new customer</button></Link>
            
          </header>
          <div className='border-b border-gray-200 mb-8'>
            <Select 
                     placeholder={<div>Select Tags</div>}

                    options={tags} 
                    isMulti 
                    className="basic-multi-select my-4 w-full max-w-64 mx-4"
                    styles={customStyles} 
                />
          </div>
        <div className=' shadow-xl hover:bg-opacity-75 rounded-xl  flex justify-between items-center  px-4 py-2 ml-6 mr-16 '>
          <div className='flex '>
            <div>
              <IoPersonOutline className='text-6xl'/>
            </div>
            <div className='pl-5 pt-2'>
              <div className='flex '>
                <p className='font-medium font-sans text-xl rounded pl-4 pr-2 content-center'>{name}</p>
              <div className={`content-center text-xs border rounded-xl px-2 ${levelColors[level] || 'bg-black'}`}>{level}</div>
              </div>
              <div className='flex font-medium font-sans text-sm rounded py-0.5 px-4 mr-1/2 pb-2.5 '><h4>Email:</h4><p className='font-medium font-sans text-sm rounded pl-1'>{email}</p></div></div>  
          </div>
          <Link to="/customer/edit"><button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Customer
