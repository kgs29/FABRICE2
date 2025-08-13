import { useState } from 'react'
import Nav from './Comp/Nav'
import Carousel from './Comp/Carousel'
import Categorie from './Comp/Categorie.jsx'
import Supplier from './Comp/Supplier'
import Footer from './Comp/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Produit from './pages/Produit.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    
    {<BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Home />} />
    <Route  path='/Home' element={<Home/>}></Route>
    <Route path='/produit' element={<Produit/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>
    </BrowserRouter> }

    </>
  )
}

export default App
