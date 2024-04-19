import  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CustomerCss/Detail.css'

function DetailandEdit() {
  
    
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  

   useEffect(() => {
    setName('Champ');
    setLevel('Gold');
    setEmail('champ489245@gmail.com');
  }, []);

  const handleEdit = () => {
    
    console.log('Editing user info...')
  }

  const handleDelete = () => {
    
    console.log('Deleting user...')
  }

  return (
    <div className='ml-64'>
      <div className='flex justify-between items-center py-4 px-4 pl-16 bg-write-200 text-gray-700 font-bold text-xl border-b border-gray-400'>
        <h2 >{name}</h2>
        <div className='flex gap-2'>
          <button className='bg-red-500 text-white no-underline py-2 px-4 rounded-custom cursor-pointer' onClick={handleDelete}>Delete</button>
          <Link to='/CustomerEdit'><button className='bg-custom-blue text-white no-underline py-2 px-4 rounded-custom cursor-pointer' onClick={handleEdit}>Edit</button></Link>
        </div>
      </div>
      <div className='bg-white mx-9 '>
          <div className='py-4 px-4 pl-8 border-b border-l border-r border-gray-400 ' >
            <div className='bg-white'>
            <h4 className='font-bold font-sans text-base pb-2.5'>Name :</h4>
            <p className='font-medium font-sans text-sm rounded py-0.5 px-4 mr-1/2 pb-2.5'>{name}</p>
            <h4 className='font-bold font-sans text-base pb-2.5'>Email :</h4>
            <p className='font-medium font-sans text-sm rounded py-0.5 px-4 mr-1/2 pb-2.5'>{email}</p>
            <div className='font-bold font-sans text-base flex gap-2.5'><h4 className='font-bold font-sans text-base'>Level :</h4><div className='border rounded bg-custom-yellow px-2'>{level}</div></div>
            </div>
            
          </div>
      </div>  
    </div>
  )
}

export default DetailandEdit
