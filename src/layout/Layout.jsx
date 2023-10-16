import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainRoutes from '../routes/MainRoutes'
import ChatIcon from '../components/ChatIcon'
// import MainRoutes from '../MainRoutes'

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar/>
        <div className="layout-content">            
          <MainRoutes/>
        </div>
      <Footer/>
      <ChatIcon/>
    </div>
    
  )
}

export default Layout