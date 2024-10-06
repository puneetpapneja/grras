import Course from 'components/course'
import React from 'react'

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
            img="assets/img/1.svg"
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
          <Course
            img="assets/img/9.svg"
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
          <Course
            img="assets/img/15.svg"
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
          <Course
            img="assets/img/12.svg"
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
          <Course
            img="assets/img/13.svg"
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
          <Course
            img="assets/img/14.svg"
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
        </div>
      </div>
    </div>
  )
}

export default PopularCourses
