import React from 'react'
import Carousel from '../Comp/Carousel'
import Categorie from '../Comp/Categorie'
import Supplier from '../Comp/Supplier'
import Nav from '../Comp/Nav'
import Footer from '../Comp/Footer'

function Produit() {
  return (
    <div>
      <Nav/>
    <Carousel/>
    <Categorie/>
    <Supplier/>
    
    <Footer/>
    </div>
  )
}

export default Produit
