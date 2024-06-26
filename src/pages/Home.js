import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/components/ProductList'
import { selectLoggedInUser } from '../features/auth/authSlice'
import Footer from '../features/common/Footer'
const Home = () => {
  return (
    <>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
        <Footer></Footer>
    </>
  )
}

export default Home