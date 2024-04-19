import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoPersonOutline } from "react-icons/io5";


const Customer = () => {

  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  

   useEffect(() => {
    setName('Champ');
    setLevel('Gold');
    setEmail('champ489245@gmail.com');
  }, []);

  return (
    <div className='ml-64'>
         
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
            <div className='content-center  text-xs border rounded-full bg-custom-yellow px-1 '>{level}</div>
            </div>
            <div className='flex font-medium font-sans text-sm rounded py-0.5 px-4 mr-1/2 pb-2.5 '><h4>Email:</h4><p className='font-medium font-sans text-sm rounded pl-1'>{email}</p></div></div>  
        </div>
        <Link to="/DetailAndEdit"><button className='bg-green-600 text-white text-xl no-underline py-2 px-4 rounded-custom cursor-pointer '>Detail</button></Link>
       </div>
    
    </div>
  )
}

export default Customer
