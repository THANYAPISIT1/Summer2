import '../CustomerCss/Customer.css'
import { Link } from 'react-router-dom'


const Customer = () => {
  return (
    <div className='ml-64'>
         
        <header className="flex justify-between items-center bg-white font">
          <h2>Customers</h2>
          <Link to="/AddNewCustomer" ><button className='add-button'>Add new customer</button></Link>
        </header>
      
    
    </div>
  )
}

export default Customer
