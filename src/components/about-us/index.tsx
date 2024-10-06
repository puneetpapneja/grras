import React from 'react'

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="bi bi-gear text-primary mb-4"></i>
                  <h5 className="mb-3">Customized Training Solutions</h5>
                  <p>
                    Tailored training programs designed to meet specific
                    organizational needs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="bi bi-alarm text-primary mb-4"></i>
                  <h5 className="mb-3">Internship Training</h5>
                  <p>
                    Certified internship training offering practical experience,
                    industry knowledge, and skill development.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="bi bi-shield-fill text-primary mb-4"></i>
                  <h5 className="mb-3">Authorized Red Hat Partner</h5>
                  <p>
                    Official Red Hat partner providing certified training and
                    expertise.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="bi bi-trophy text-primary mb-4"></i>
                  <h5 className="mb-3">Industry-Recognized Certifications</h5>
                  <p>
                    Prepare for certifications that enhance career opportunities
                    and validate skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about.svg"
                  style={{ objectFit: 'cover' }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <p className="mb-4">
                At <strong>Grras Pvt. Ltd.</strong>, we empower individuals
                through industry-relevant training and certification programs.
                As an authorized Red Hat training partner, we deliver official
                courses led by certified instructors, preparing participants for
                recognized certifications.
              </p>
              <p className="mb-4">
                We offer degree programs such as Bachelor of Computer
                Applications (BCA) and Master of Computer Applications (MCA),
                along with internship training programs, including summer and
                winter internships, that bridge theory and practical experience.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Industry-Relevant Training
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Authorized Red Hat Partner
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Degree Programs
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Internship Training
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Hands-On Experience
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Certification Preparation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
