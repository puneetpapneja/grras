import { ICourse } from 'interfaces/ICourse'
import React, { FC } from 'react'

const Course: FC<ICourse> = ({
  img = 'assets/img/course-3.jpg',
  timing,
  heading,
}) => {
  return (
    // <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
    <div className="course-item bg-light ">
      <div className="position-relative overflow-hidden">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="text-center p-4 pb-0">
        <h5 className="mb-4">{heading}</h5>
      </div>
      <div className="d-flex border-top">
        <small className="flex-fill text-center border-end py-2">
          <a
            href="#"
            className="flex-shrink-0 btn btn-sm btn-link px-3 border-end"
            style={{ borderRadius: '30px 0 0 30px;' }}
          >
            Read More
          </a>
        </small>
        <small className="flex-fill text-center border-end py-2">
          <i className="fa fa-clock text-primary me-2"></i>
          {timing}
        </small>
        <small className="flex-fill text-center py-2">
          <a
            href="#"
            className="flex-shrink-0 btn btn-sm btn-link px-3"
            style={{ borderRadius: '30px 0 0 30px;' }}
          >
            Join Now
          </a>
        </small>
      </div>
    </div>
    // </div>
  )
}

export default Course
