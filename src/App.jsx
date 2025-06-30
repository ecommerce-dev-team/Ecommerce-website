import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'

import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Layout from './Components/Layout/Layout.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import { AuthContextProvider } from './Components/Context/AuthContext.jsx'
import Guard from './Components/Guard/Guard.jsx'
import Shopcontextprovider from './Components/Context/Context.jsx'

const Router = createBrowserRouter([
  {path:"/"  , element :  <Layout/> , children : [
    {path:""  , element: <Register/>},
    {path:"register"  , element: <Register/>},
    {path:"login" , element: <Login/>},
    {path:"About_Us" , element: <h1>About_Us</h1> },
    {/* protected paths */},
    {path:"HOME"  , element:  <Guard> <Home/> </Guard> },
    {path:"Compare" , element:  <Guard>  <h1>Compare</h1> </Guard>},
    {path:"Wishlist" , element:  <Guard>  <h1>Wishlist</h1> </Guard>},
    {path:"contactUs"  , element: <Guard>  <ContactUs/> </Guard>  },
    {path:"SHOP"  , element: <Guard>  <h1> Shop </h1> </Guard>},
    {path:"MEATS_SEAFOOD"  , element: <Guard>  <h1> MEATS SEAFOOD </h1> </Guard>},
    {path:"BAKERY"  , element: <Guard>  <h1> BAKERY </h1> </Guard>},
    {path:"BEVERAGES"  , element: <Guard>  <h1> BEVERAGES </h1> </Guard>},
    {path:"BLOG"  , element: <Guard>  <h1> BLOG </h1> </Guard>},
    {path: "*" , element: <>
    
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="text-center">
            <p class="text-5xl font-bold text-indigo-600">404</p>
            <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
            <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
          </div>
        </main>
    
    </>  }

  ]}
])

export default function App() {

  return <>

    <AuthContextProvider>
      
      <Shopcontextprovider>

        
          <RouterProvider router={Router}/>
        

      </Shopcontextprovider>
      
    </AuthContextProvider>
  
  </>
}
