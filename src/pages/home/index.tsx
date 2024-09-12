import AboutUs from 'components/about-us'
import Banner from 'components/banner'
import PopularCourses from 'components/popular-courses'
import Testimonial from 'components/testimonial'
import importScript from 'hooks'
import React from 'react'

const HomePage: React.FC = () => {
  importScript()
  return (
    <>
      <Banner />
      <AboutUs />
      {/* <Categories /> */}
      <PopularCourses />
      <Testimonial />
    </>
  )
}

export default HomePage
