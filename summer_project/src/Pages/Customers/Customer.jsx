import { Link } from 'react-router-dom'
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

          <header className="flex justify-between items-center bg-white text-black text-3xl font-bold pl-8 px-2 py-4 mb-8 border-b border-gray-200 ">
            <h2>Customers</h2>
            <Link to="/customer/add" ><button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add new customer</button></Link>
            
          </header>
        <div className=' border-b rounded-xl border-gray-700 flex justify-between items-center  px-4 py-2 ml-6 mr-16 '>
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
          <Link to="/customer/detail"><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mt-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Detail</button></Link>
        </div>
      
      </div>
    </div>
  )
}

export default Customer
