import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Acheteur from './pages/Acheteur.jsx'
// import Categories from './pages/Categories.jsx'; // à créer si besoin
import Fournisseur from './pages/Fournisseur.jsx'; 
import Contact from './pages/Contact.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/acheteur" element={<Acheteur />} />
        <Route path="/fournisseur" element={<Fournisseur />} /> 
        <Route path="/contact" element={<Contact />} /> 
        {/* <Route path="/categories" element={<Categories />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App