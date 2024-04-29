<<<<<<< Updated upstream
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/LoginPages/Login'
import Register from './Pages/LoginPages/Register'
import Broadcast from './Pages/Broadcasts/Broadcast'
import Customer from './Pages/Customers/Customer'
import BCRecipients from './Pages/Broadcasts/BCRecipients'
import TestingGround from './TestingGround'

=======
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPages/Login";
import Register from "./Pages/LoginPages/Register";
import Broadcast from "./Pages/Broadcasts/Broadcast";
import Customer from "./Pages/Customers/Customer";
import AddNewCustomer from "./Pages/Customers/AddNewCustomer";
import Template from "./Pages/Templates/Template";
import Template_editor from "./Pages/Templates/Template_editor";
import CustomerEdit from "./Pages/Customers/CustomerEdit";
import BCRecipients from "./Pages/Broadcasts/BCRecipients";
import TestingGround from "./TestingGround";
>>>>>>> Stashed changes

function App() {


  return (
    <div>
      <Routes>
        <Route path='test' element={<TestingGround/>}/>
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
