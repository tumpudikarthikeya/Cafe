import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './login/Login'
import Main from './home/Home'
import Register from './register/Register'
import Profile from './profile/Profile'
import Orders from './orders/Orders'
Orders


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element= {<Login />} />
        <Route path='/home' element= {<Main />} />
        <Route path='/signup' element= {<Register />} />
        <Route path='/profile' element= {<Profile />} />
        <Route path='/orders' element= {<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
