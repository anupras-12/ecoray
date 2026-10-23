import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layouts = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>

    </main>
    <Footer/>
    </>
  )
}

export default Layouts