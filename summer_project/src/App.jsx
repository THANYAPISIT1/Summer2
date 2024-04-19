import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/LoginPages/Login'
import Register from './Pages/LoginPages/Register'
import Broadcast from './Pages/Broadcasts/Broadcast'
import Customer from './Pages/Customers/Customer'
import AddNewCustomer from './Pages/Customers/AddNewCustomer'
import DetailAndEdit from './Pages/Customers/DetailAndEdit'
import CustomerEdit from './Pages/Customers/CustomerEdit'

function App() {


  return (
    <div>
      <Routes>
        <Route path='Broadcast' element={<Broadcast/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='Customer' element={<Customer/>}/>
        <Route path='AddNewCustomer' element={<AddNewCustomer/>}/>
        <Route path='DetailAndEdit' element={<DetailAndEdit/>}/>
        <Route path='CustomerEdit' element={<CustomerEdit/>}/>
      </Routes>
    </div>
  )
}

export default App
