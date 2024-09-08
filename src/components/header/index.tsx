import React from 'react'
import { Link } from 'react-router-dom'
import { COURSES } from 'utils/constants'

const Header = () => {
  const renderMenus = () => {
    return COURSES?.map((course) => {
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
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="index.html"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <img src="assets/img/logo.jpg" className="logo_img" />
        </h2>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Traning
            </a>
            <div className="dropdown-menu fade-down m-0">{renderMenus()}</div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Certifications
            </a>
            <div className="dropdown-menu fade-down m-0">
              {/* {renderMenus()} */}
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
              {/* {renderMenus()} */}
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Exams
            </a>
            <div className="dropdown-menu fade-down m-0">
              {/* {renderMenus()} */}
            </div>
          </div>
          <Link to="/" className="nav-item nav-link">
            Internship
          </Link>
        </div>
        <a
          href="tel:+91-9529595240"
          className="text-color-red fs-0-9"
          target="_blank"
        >
          <i className="fa fa-phone-alt"></i> 9529595240
        </a>
        &nbsp;&nbsp;
        <a
          href="https://wa.link/0qhq91"
          className="text-color-green fs-0-9"
          target="_blank"
        >
          <i className="fab fa-whatsapp"></i> 9785016284
        </a>
        &nbsp;&nbsp;
        <a
          href="mailto:info@grras.com"
          className="text-color-coral fs-0-9"
          target="_blank"
        >
          <i className="fa fa-envelope-open"></i> info@grras.com
        </a>
        &nbsp;&nbsp;
      </div>
    </nav>
  )
}

export default Header
