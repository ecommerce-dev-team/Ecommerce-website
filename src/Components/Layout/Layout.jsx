import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'


export default function Layout() {
  return <>
  
  <Navbar/>

  <div className='mt-10'></div>


  <Outlet/>


  <div className='mb-10'></div>
  
  <Footer/>
  
    
  </>
}
