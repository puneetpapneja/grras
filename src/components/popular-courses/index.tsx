import Course from 'components/course'
import React from 'react'
import { SLUGS } from 'utils/constants'

const PopularCourses: React.FC = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Courses
          </h6>
          <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className="owl-carousel popular-courses position-relative">
          <Course
            img="assets/img/1.jpg"
            heading="RHCSA"
            route={`course/${SLUGS.RHCSA}`}
            timing="15 Hours"
            key={3}
          />
          <Course
            img="assets/img/9.jpg"
            route={`course/${SLUGS.CKA}`}
            heading="Kubernetes"
            timing="15 Hours"
            key={3}
          />
          <Course
            img="assets/img/15.jpg"
            route={`course/${SLUGS.WINTER_INTERNSHIP_TRANING}`}
            heading="Winter Internship"
            timing="15 Hours"
            key={3}
          />
          <Course
            img="assets/img/12.jpg"
            route={`course/${SLUGS.BCA_DEGREE_PROGRAM}`}
            heading="BCA Degree Programs"
            timing="15 Hours"
            key={3}
          />
          <Course
            img="assets/img/13.jpg"
            route={`course/${SLUGS.MCA_DEGREE_PROGRAM}`}
            heading="MCA Degree Programs"
            timing="15 Hours"
            key={3}
          />
          <Course
            img="assets/img/14.jpg"
            route={`course/${SLUGS.SUMMER_INTERNSHIP_TRANING}`}
            heading="Summer Internship"
            timing="15 Hours"
            key={3}
          />
        </div>
      </div>
    </div>
  )
}

export default PopularCourses
