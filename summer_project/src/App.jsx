import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Broadcast from './Pages/Broadcast'

function App() {


  return (
    <div>
      <Routes>
        <Route path='Broadcast' element={<Broadcast/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
