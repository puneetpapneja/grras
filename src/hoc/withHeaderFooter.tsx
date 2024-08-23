import Footer from 'components/footer'
import Header from 'components/header'
import React, { FC } from 'react'

interface WithHeaderFooterProps {}

const WithHeaderFooter = (Component: FC) => {
  return (props: WithHeaderFooterProps) => (
    <>
      <Header />
      <Component {...props} />
      <Footer />
    </>
  )
}

export default WithHeaderFooter
