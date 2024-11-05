import React from 'react'

const BCAProgram: React.FC = () => {
  return (
    <div className="bca-container">
      <div
        className="banner text-center"
        style={{ background: `url(/assets/img/12.jpg) no-repeat` }}
      ></div>

      <div className="container course-details rounded">
        <div className="row">
          <section className="bca-introduction">
            <p>
              Our <strong>Bachelor of Computer Applications (BCA)</strong>{' '}
              program, affiliated with renowned universities like{' '}
              <strong>Rajasthan University</strong> and{' '}
              <strong>Manipal University</strong>, offers a cutting-edge
              curriculum designed to prepare you for the fast-evolving world of
              technology. We provide a <strong>100% job guarantee</strong> upon
              graduation, ensuring that you are placed in top-tier companies.
            </p>
          </section>

          <section className="bca-why-choose">
            <h2>Why Choose Our BCA Program?</h2>
            <div className="bca-cards">
              <div className="bca-card">
                <h5>100% Job Guarantee</h5>
                <p>
                  Our commitment ensures that every graduate secures employment
                  in a reputed company.
                </p>
              </div>
              <div className="bca-card">
                <h5>Affiliated with Leading Universities</h5>
                <p>
                  Earn a globally recognized degree with high academic
                  standards.
                </p>
              </div>
              <div className="bca-card">
                <h5>Hands-On Learning</h5>
                <p>
                  Work on real-world projects and internships to gain practical
                  experience.
                </p>
              </div>
            </div>
          </section>

          <section className="bca-highlights">
            <h2>Program Highlights</h2>
            <ul className="bca-highlights-list">
              <li>100% Job Guarantee after program completion</li>
              <li>Semester-Based Learning for systematic knowledge building</li>
              <li>Live Projects and Internships with top companies</li>
              <li>
                Practical Training in key areas like Software Development, Cloud
                Computing, and Cybersecurity
              </li>
              <li>Expert Faculty from both industry and academia</li>
              <li>
                Affiliation with Reputable Universities like Rajasthan
                University and Manipal University
              </li>
            </ul>
          </section>

          <section className="bca-structure">
            <h2>Course Structure (Semester-Based Learning)</h2>
            <div className="bca-structure-year">
              <div>
                <h5>Year 1: Foundational Skills</h5>
                <h6>Semester 1:</h6>
                <ul>
                  <li>Introduction to Programming (Python/C++)</li>
                  <li>Fundamentals of Web Development (HTML, CSS)</li>
                  <li>Computer Organization</li>
                  <li>Communication Skills for IT</li>
                  <li>Practical Lab: Basic Programming Projects</li>
                </ul>
                <h6>Semester 2:</h6>
                <ul>
                  <li>Data Structures and Algorithms</li>
                  <li>Advanced Web Development (JavaScript, Bootstrap)</li>
                  <li>Mathematics for Computing</li>
                  <li>Operating Systems</li>
                  <li>Practical Lab: Web Development Projects</li>
                </ul>
              </div>
              <div>
                <h5>Year 2: Core Competency Building</h5>
                <h6>Semester 3:</h6>
                <ul>
                  <li>Object-Oriented Programming (Java)</li>
                  <li>Database Management Systems (SQL, NoSQL)</li>
                  <li>Networking Fundamentals</li>
                  <li>Software Engineering</li>
                  <li>Practical Lab: Database Projects and Networking Tasks</li>
                </ul>
                <h6>Semester 4:</h6>
                <ul>
                  <li>Cloud Computing Basics (AWS, Azure)</li>
                  <li>Mobile App Development (Android/iOS)</li>
                  <li>Linux Administration</li>
                  <li>Data Communication and Networks</li>
                  <li>Practical Lab: Cloud and Mobile Development Projects</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bca-specialization">
            <h5>Year 3: Specialization and Career Preparation</h5>
            <div className="bca-specialization-content">
              <div>
                <h6>Semester 5:</h6>
                <ul>
                  <li>
                    Data Science and Machine Learning (Python, TensorFlow)
                  </li>
                  <li>Cybersecurity and Ethical Hacking</li>
                  <li>DevOps Tools (Docker, Kubernetes, Jenkins)</li>
                  <li>Elective: Blockchain or Artificial Intelligence</li>
                  <li>
                    Practical Lab: Data Science and Cybersecurity Projects
                  </li>
                </ul>
              </div>
              <div>
                <h6>Semester 6:</h6>
                <ul>
                  <li>Full Stack Web Development (React, Django/Flask)</li>
                  <li>Project Management and Agile Methodologies</li>
                  <li>Capstone Project and Industry Internship</li>
                  <li>Job Placement Preparation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bca-job-guarantee">
            <h2>100% Job Guarantee</h2>
            <p>
              Our <strong>100% job guarantee</strong> means that every graduate
              will secure a job placement in top IT companies. Our{' '}
              <strong>placement cell</strong> collaborates with industry leaders
              to ensure you’re placed in the right role, whether it's in{' '}
              <strong>Software Development</strong>,{' '}
              <strong>Cloud Engineering</strong>, <strong>Data Science</strong>,
              or <strong>DevOps</strong>.
            </p>
          </section>

          <section className="bca-careers">
            <h5>Top Job Roles You Can Pursue:</h5>
            <ul className="bca-careers-list">
              <li>Software Developer</li>
              <li>Cloud Engineer</li>
              <li>Data Scientist</li>
              <li>DevOps Engineer</li>
              <li>Network Administrator</li>
              <li>Cybersecurity Analyst</li>
            </ul>

            <h5>Our Hiring Partners:</h5>
            <div className="bca-partners">
              <img src="/assets/img/tcs.svg" alt="TCS" />
              <img src="/assets/img/wipro.svg" alt="Wipro" />
              <img src="/assets/img/accenture.svg" alt="Accenture" />
              <img src="/assets/img/cognizants.svg" alt="Cognizant" />
              <img src="/assets/img/ibm.svg" alt="IBM" />
              <img src="/assets/img/infosys.svg" alt="Infosys" />
              <img src="/assets/img/tech-mahindra.svg" alt="Tech Mahindra" />
              <img src="/assets/img/capgemini.svg" alt="Capgemini" />
            </div>
          </section>

          <section className="bca-eligibility">
            <h2>Eligibility</h2>
            <p>
              Students from <strong>any subject background</strong> who have
              completed their 12th grade are eligible to enroll. Whether you
              have a background in commerce, science, or arts, this program will
              set you up for success in IT.
            </p>
          </section>

          <section className="bca-admission">
            <h2>Admission Process</h2>
            <ol>
              <li>
                <strong>Eligibility:</strong> Students from any subject
                background with 12th-grade completion can apply.
              </li>
              <li>
                <strong>Entrance Test/Direct Admission:</strong> Admission is
                based on merit or performance in an entrance exam.
              </li>
              <li>
                <strong>Interview:</strong> An interview to assess your
                suitability for the program.
              </li>
              <li>
                <strong>Enrollment:</strong> Complete the formalities and secure
                your seat by paying the enrollment fee.
              </li>
            </ol>
          </section>

          <section className="bca-fees">
            <h2>Fees and Scholarships</h2>
            <p>
              We offer flexible payment options and scholarships to meritorious
              students or those in need. Contact us for more information on
              scholarship opportunities.
            </p>
          </section>

          <section className="bca-contact">
            <h2>Contact Us</h2>
            <p>
              Ready to take the first step toward a successful career in IT?
              Contact us today to learn more about the BCA program, the
              admission process, and the exciting opportunities that await you.
            </p>
            <img
              src="/images/contact-us.jpg" // Replace with actual image path
              alt="Contact Us"
              className="bca-contact-image"
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default BCAProgram
