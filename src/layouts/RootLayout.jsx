import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import ProductCard from '../components/Card/ProductCard'

function RootLayout() {
  return (
    <>
    <Navbar/>
    <ProductCard/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout