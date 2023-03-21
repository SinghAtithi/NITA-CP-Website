import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <header className='sticky top-0 z-40'>
        <Navbar />
      </header>
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout