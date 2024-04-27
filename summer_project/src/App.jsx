import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/LoginPages/Login'
import Register from './Pages/LoginPages/Register'
import Broadcast from './Pages/Broadcasts/Broadcast'
import Customer from './Pages/Customers/Customer'
import BCRecipients from './Pages/Broadcasts/BCRecipients'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Broadcast/>}/>
        <Route path='broadcast/recipients' element={<BCRecipients/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='customers' element={<Customer/>}/>
        <Route path='customer/edit' element={<customerEdit/>}/>
      </Routes>
    </div>
  )
}

export default App
