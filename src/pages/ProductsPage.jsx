import React from 'react';
import Carousel from '../Comp/Carousel';
import Categorie from '../Comp/Categorie';
import SuppliersSection from '../Comp/Supplier';
import Footer from '../Comp/Footer';
import Nav from '../Comp/Nav';


const ProductsPage = () => {
  return (
    <>
      <Nav />
      <main>
        <Carousel />
        <Categorie />
  <SuppliersSection />

      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
