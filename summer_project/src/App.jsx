import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/LoginPages/Login'
import Register from './Pages/LoginPages/Register'
import Broadcast from './Pages/Broadcasts/Broadcast'
import Customer from './Pages/Customers/Customer'


function App() {


  return (
    <div>
      <Routes>
        <Route path='Broadcast' element={<Broadcast/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='Customer' element={<Customer/>}/>
      </Routes>
    </div>
  )
}

export default App
