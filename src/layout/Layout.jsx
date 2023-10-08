import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainRoutes from '../routes/MainRoutes'
// import MainRoutes from '../MainRoutes'

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar/>
        <div className="layout-content">            
          <MainRoutes/>
        </div>
      <Footer/>
    </div>
    
  )
}

export default Layout