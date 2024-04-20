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
      <div className='ml-64 mt-16'>

          <header className="flex justify-between items-center bg-white text-black text-3xl font-bold pl-8 px-2 py-4 mb-8 border-b border-gray-300">
            <h2>Customers</h2>
            <Link to="/AddNewCustomer" ><button className='bg-blue-600 text-white text-xl no-underline py-2 px-4 rounded-custom cursor-pointer'>Add new customer</button></Link>
            
          </header>
        <div className=' border-b rounded-xl border-gray-700 flex justify-between items-center  px-4 py-2 ml-6 mr-16'>
          <div className='flex '>
            <div>
              <IoPersonOutline className='text-6xl'/>
            </div>
            <div className='pl-5'>
              <div className='flex '>
                <p className='font-medium font-sans text-xl rounded pl-4 pr-2 content-center'>{name}</p>
              <div className={`content-center text-xs border rounded-xl px-2 ${levelColors[level] || 'bg-gray-400'}`}>{level}</div>
              </div>
              <div className='flex font-medium font-sans text-sm rounded py-0.5 px-4 mr-1/2 pb-2.5 '><h4>Email:</h4><p className='font-medium font-sans text-sm rounded pl-1'>{email}</p></div></div>  
          </div>
          <Link to="/DetailAndEdit"><button className='bg-green-600 text-white text-xl no-underline py-2 px-4 rounded-custom cursor-pointer '>Detail</button></Link>
        </div>
      
      </div>
    </div>
  )
}

export default Customer
