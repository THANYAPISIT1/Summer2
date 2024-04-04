import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Components/LoginForm/Login'
import Register from './Components/RegisterForm/RegisterForm'

function App() {


  return (
    <div className='text-white h-screen flex justify-center items-center bg-cover' style={{"backgroundImage" : "url('../src/assets/background.jpg')"}}>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
