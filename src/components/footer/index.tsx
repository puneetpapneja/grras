import Social from 'components/social'
import { IPrograms } from 'interfaces/IProgram'
import React from 'react'
import { Link } from 'react-router-dom'
import { COURSES, PHONE_NO } from 'utils/constants'

const Footer = () => {
  const renderMenus = (courses: Array<IPrograms>) => {
    return courses?.map((course) => {
      if (course?.subCourse?.length > 0) {
        return course?.subCourse.slice(0, 2)?.map((subcourse) => {
          return (
            <Link to={subcourse?.route} className="btn btn-link">
              {subcourse?.shortName}
            </Link>
          )
        })
      }
      return null
    })
  }
  return (
    <>
      <div
        className="container-fluid bg-theme text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              {renderMenus(COURSES)}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>A-81, Singh Bhoomi
                Khatipura Rd, behind Marudhar Hospital, Jaipur, Rajasthan 302012
              </p>
              <p className="mb-2">
                <a
                  href={`tel:+91-${PHONE_NO}`}
                  className="text-color-white me-3"
                  target="_blank"
                >
                  <i className="fa fa-phone-alt"></i> {PHONE_NO}
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="mailto:info@grras.com"
                  className="text-color-white"
                  target="_blank"
                >
                  <i className="fa fa-envelope-open"></i> info@grras.com
                </a>
              </p>
              <div className="d-flex pt-2">
                <Social />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2487101153915!2d75.74307307468452!3d26.927328776638458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d0e5555555%3A0xc45671d79cdb76ba!2sGrras%20Solution%20Pvt%20Ltd%20-%20Advanced%20IT%20Training%20%26%20Certification%20Center!5e0!3m2!1sen!2sin!4v1732709120456!5m2!1sen!2sin"
                width="500"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{' '}
                <a className="border-bottom" href="#">
                  Grras.com
                </a>
                , All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  )
}

export default Footer
