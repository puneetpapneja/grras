import Footer from 'components/footer'
import Header from 'components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutPage
