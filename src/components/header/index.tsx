import { IPrograms } from 'interfaces/IProgram'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  COURSES,
  DEGREE_PROGRAMS,
  INTERNSHIP_PROGRAMS,
  PHONE_NO,
  WHATS_APP_LINK,
} from 'utils/constants'

const Header = () => {
  const renderMenus = (courses: Array<IPrograms>) => {
    return courses?.map((course) => {
      if (course?.subCourse?.length > 0) {
        const subMenus = course?.subCourse?.map((subcourse) => {
          return (
            <Link to={subcourse?.route} className="dropdown-item">
              {subcourse?.name}
            </Link>
          )
        })
        return (
          <div className="dropdown-submenu">
            <a href="#" className="dropdown-item dropdown-toggle">
              {course?.name}
            </a>
            <div className="dropdown-menu">{...subMenus}</div>
          </div>
        )
      } else {
        return (
          <Link to={course?.route} className="dropdown-item">
            {course?.name}
          </Link>
        )
      }
    })
  }
  return (
    <>
      {/* Top bar with Red Hat Certified Center and contact details */}
      <div className="container-fluid bg-light py-2 px-4">
        <div className="row align-items-center">
          {/* Red Hat Certified Center - Centered */}
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <img
              src="assets/img/redhat.png"
              className="redhat-logo"
              alt="Logo"
            />
            <span className="text-danger fw-bold">
              Red Hat Authorized Training and Certification Partner since 2008
            </span>
          </div>

          {/* Contact Details - Right */}
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
            <a className="btn btn-outline-info btn-social" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-info btn-social" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-info btn-social" href="">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="btn btn-outline-info btn-social" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <div className="container-fluid">
          {/* Logo */}
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h2 className="m-0 text-primary">
              <img src="assets/img/logo.jpg" className="logo_img" alt="Logo" />
            </h2>
          </a>

          {/* Toggler button for mobile */}
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav p-4 p-lg-0">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Training & Certifications
                </a>
                <div className="dropdown-menu fade-down m-0">
                  {renderMenus(COURSES)}
                </div>
              </div>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Degree Programs
                </a>
                <div className="dropdown-menu fade-down m-0">
                  {renderMenus(DEGREE_PROGRAMS)}
                </div>
              </div>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Internship
                </a>
                <div className="dropdown-menu fade-down m-0">
                  {renderMenus(INTERNSHIP_PROGRAMS)}
                </div>
              </div>
              <div
                className="col-lg-5 col-md-12 d-flex justify-content-center justify-content-md-end"
                style={{ alignItems: 'center' }}
              >
                <a
                  href={`tel:+91-${PHONE_NO}`}
                  className="text-color-red me-3"
                  target="_blank"
                >
                  <i className="fa fa-phone-alt"></i> {PHONE_NO}
                </a>
                <a
                  href={WHATS_APP_LINK}
                  className="text-color-green me-3"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp"></i> {PHONE_NO}
                </a>
                <a
                  href="mailto:info@grras.com"
                  className="text-color-coral"
                  target="_blank"
                >
                  <i className="fa fa-envelope-open"></i> info@grras.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
