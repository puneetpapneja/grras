import Course from 'components/course'
import React from 'react'

const PopularCourses: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Courses
          </h6>
          <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <Course
            img="assets/img/course-1.jpg"
            price={149}
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
          <Course
            img="assets/img/course-2.jpg"
            price={149}
            heading="Web Design & Development Course for Beginners"
            noOfStudents={30}
            timing="15 Hours"
            trainerName="Ravi Saraswat"
            key={3}
          />
          <Course
            img="assets/img/course-3.jpg"
            price={149}
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
