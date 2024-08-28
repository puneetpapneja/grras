import { ICourse } from 'interfaces/ICourse'
import React, { FC } from 'react'

const Course: FC<ICourse> = ({
  img = 'assets/img/course-3.jpg',
  price,
  timing,
  trainerName,
  heading,
  noOfStudents,
}) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
      <div className="course-item bg-light">
        <div className="position-relative overflow-hidden">
          <img className="img-fluid" src={img} alt="" />
          <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
            <a
              href="#"
              className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
              style={{ borderRadius: '30px 0 0 30px;' }}
            >
              Read More
            </a>
            <a
              href="#"
              className="flex-shrink-0 btn btn-sm btn-primary px-3"
              style={{ borderRadius: '30px 0 0 30px;' }}
            >
              Join Now
            </a>
          </div>
        </div>
        <div className="text-center p-4 pb-0">
          <h3 className="mb-0">₹ {price}</h3>
          <div className="mb-3">
            <small className="fa fa-star text-primary"></small>
            <small className="fa fa-star text-primary"></small>
            <small className="fa fa-star text-primary"></small>
            <small className="fa fa-star text-primary"></small>
            <small className="fa fa-star text-primary"></small>
            <small>(123)</small>
          </div>
          <h5 className="mb-4">{heading}</h5>
        </div>
        <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-user-tie text-primary me-2"></i>
            {trainerName}
          </small>
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-clock text-primary me-2"></i>
            {timing}
          </small>
          <small className="flex-fill text-center py-2">
            <i className="fa fa-user text-primary me-2"></i>
            {noOfStudents} Students
          </small>
        </div>
      </div>
    </div>
  )
}

export default Course
