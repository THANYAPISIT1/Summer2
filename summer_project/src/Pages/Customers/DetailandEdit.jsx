import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../CustomerCss/Detail.css'

function DetailandEdit() {
  
    
  const [name, setName] = useState('Champ');
  const [level, setLevel] = useState('Gold');
  const [email, setEmail] = useState('champ489245@gmail.com');
  

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
          <button className='delete-button' onClick={handleDelete}>Delete</button>
          <Link to='/CustomerEdit'><button className='edit-button' onClick={handleEdit}>Edit</button></Link>
        </div>
      </div>
      <div className='bg-white mx-9 '>
          <div className='py-4 px-4 pl-8 border-b border-l border-r border-gray-400 ' >
            <div className='details'>
            <h4 className='name'>Name :</h4>
            <p className='status-name'>{name}</p>
            <h4 className='email'>Email :</h4>
            <p className='status-email'>{email}</p>
            <div className='StatLevel'><h4 className='level'>Level :</h4><div className='Status-level'>{level}</div></div>
            </div>
            
          </div>
      </div>  
    </div>
  )
}

export default DetailandEdit
