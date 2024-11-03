import React from 'react'

const BCAProgram: React.FC = () => {
  return (
    <>
      <section className="hero-section d-flex align-items-center text-center">
        <div className="container hero-content">
          <h1 className="display-4 font-weight-bold"></h1>
          <p className="lead"></p>
        </div>
      </section>

      <div className="container my-5">
        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h3 className="text-center section-title">
              Why Choose Our BCA Program?
            </h3>
            <p className="text-center">
              Our BCA program, affiliated with renowned universities, prepares
              you for a career in the fast-evolving tech world with a{' '}
              <span className="highlight">100% job guarantee</span>.
            </p>
            <div className="row text-center">
              <div className="col-md-4">
                <i className="icon fas fa-briefcase"></i>
                <h5 className="mt-2">100% Job Guarantee</h5>
                <p>
                  Your career is our commitment, with placement in top
                  companies.
                </p>
              </div>
              <div className="col-md-4">
                <i className="icon fas fa-university"></i>
                <h5 className="mt-2">Affiliated Universities</h5>
                <p>
                  Globally recognized degrees from Rajasthan and Manipal
                  Universities.
                </p>
              </div>
              <div className="col-md-4">
                <i className="icon fas fa-laptop-code"></i>
                <h5 className="mt-2">Industry-Focused Curriculum</h5>
                <p>
                  Hands-on skills in Software Development, Cybersecurity, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h3 className="text-center section-title">Program Highlights</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fas fa-check-circle"></i> 100% Job Guarantee after
                program completion
              </li>
              <li className="list-group-item">
                <i className="fas fa-calendar-alt"></i> Semester-Based Learning
              </li>
              <li className="list-group-item">
                <i className="fas fa-briefcase"></i> Live Projects and
                Internships
              </li>
              <li className="list-group-item">
                <i className="fas fa-laptop-code"></i> Practical Training in key
                areas like Software Development
              </li>
              <li className="list-group-item">
                <i className="fas fa-chalkboard-teacher"></i> Expert Faculty
              </li>
            </ul>
          </div>
        </div>

        <div className="accordion mb-4" id="courseStructure">
          <div className="card">
            <div className="card-header">
              <h5>
                <button
                  className="accordion-button"
                  data-toggle="collapse"
                  data-target="#collapseCourse"
                >
                  Course Structure (Semester-Based Learning)
                </button>
              </h5>
            </div>
            <div
              id="collapseCourse"
              className="collapse show"
              data-parent="#courseStructure"
            >
              <div className="card-body">
                <h5 className="highlight">Year 1: Foundational Skills</h5>
                <ul>
                  <li>
                    <strong>Semester 1:</strong> Intro to Programming, Web
                    Development, Communication Skills
                  </li>
                  <li>
                    <strong>Semester 2:</strong> Data Structures, Advanced Web
                    Development, Operating Systems
                  </li>
                </ul>
                <h5 className="highlight">Year 2: Core Competency Building</h5>
                <ul>
                  <li>
                    <strong>Semester 3:</strong> OOP, Database Systems,
                    Networking Fundamentals
                  </li>
                  <li>
                    <strong>Semester 4:</strong> Cloud Computing, Mobile App
                    Development, Linux Administration
                  </li>
                </ul>
                <h5 className="highlight">
                  Year 3: Specialization and Career Preparation
                </h5>
                <ul>
                  <li>
                    <strong>Semester 5:</strong> Data Science, Cybersecurity,
                    DevOps Tools
                  </li>
                  <li>
                    <strong>Semester 6:</strong> Full Stack Web Dev, Project
                    Management, Internship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h3 className="text-center section-title">100% Job Guarantee</h3>
            <p className="text-center">
              Our commitment ensures job placement in top IT companies like TCS,
              Wipro, and IBM.
            </p>
            <h5>Top Job Roles:</h5>
            <ul>
              <li>Software Developer</li>
              <li>Cloud Engineer</li>
              <li>Data Scientist</li>
              <li>DevOps Engineer</li>
              <li>Network Administrator</li>
            </ul>
          </div>
        </div>

        <div className="contact-card text-center shadow-lg p-4 mb-4">
          <h3>Admission Process</h3>
          <p>
            <strong>Eligibility:</strong> Students from any subject background
            who have completed 12th grade can apply.
          </p>
          <p>
            <strong>Entrance Test/Interview:</strong> Based on merit or entrance
            performance.
          </p>
          <h3>Contact Us</h3>
          <p>
            <strong>Phone:</strong> [Insert contact number]
          </p>
          <p>
            <strong>Email:</strong> [Insert contact email]
          </p>
          <p>
            <strong>Location:</strong> [Insert address]
          </p>
        </div>
      </div>
    </>
  )
}

export default BCAProgram
