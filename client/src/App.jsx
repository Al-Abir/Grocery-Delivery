import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast"
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCatgory from './pages/ProductCatgory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOders from './pages/MyOders'
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  const{showUserLogin} = useAppContext()
  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showUserLogin ?<Login></Login>:null}
      <Toaster></Toaster>
      <div className={`${isSellerPath?"":"px-6 md:px-16 lg:px-24"}`}>
         <Routes>
             <Route path='/'element={<Home></Home>}></Route>
             <Route path='/products'element={<AllProducts></AllProducts>}></Route>
             <Route path='/products/:category'element={<ProductCatgory></ProductCatgory>}></Route>
             <Route path='/products/:category/:id'element={<ProductDetails></ProductDetails>}></Route>
             <Route path='/cart'element={<Cart></Cart>}></Route>
             <Route path='/add-address'element={<AddAddress></AddAddress>}></Route>
             <Route path='/my-orders'element={<MyOders></MyOders>}></Route>
             

         </Routes>

      </div>
     {!isSellerPath &&<Footer></Footer>}
    </div>
  )
}

export default App
