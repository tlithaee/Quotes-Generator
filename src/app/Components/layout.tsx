import React from 'react'
import Navbar from './navbar'
import End from './end'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <Navbar/>
      {children}  
    <End/>
    </>
  )
}

export default Layout