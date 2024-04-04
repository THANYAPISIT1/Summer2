import './App.css'
import LoginForm from './Components/LoginForm/LoginForm'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <div className='text-white h-screen flex justify-center items-center bg-cover' style={{"backgroundImage" : "url('../src/assets/background.jpg')"}}>
      <Routes>
        <Route path='login' element={<LoginForm/>}/>
      </Routes>
    </div>
  )
}

export default App
