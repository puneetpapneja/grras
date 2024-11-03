import { ICourseDetails } from 'interfaces/ICourse'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { courseWhatsApp, sanitizeHTML } from 'utils'
import { COURSE_DETAILS, OFFICIAL_EMAIL } from 'utils/constants'

const CourseDetails: React.FC = () => {
  const [content, setContent] = useState<ICourseDetails>()
  const navigate = useNavigate()
  const { slug } = useParams()
  useEffect(() => {
    if (slug) {
      const details = COURSE_DETAILS[slug]
      if (!details || Object.keys(details)?.length === 0) {
        navigate('/')
      }
      setContent(details)
    } else {
      setContent({})
    }
  }, [slug, content])

  const generateWhatsAppLink = () => {
    return courseWhatsApp(content?.name || '')
  }

  const getHighlights = () => {
    if (content?.highlights?.length === 0) {
      return null
    } else {
      return (
        <>
          <h3 className="text-color">Key Highlights</h3>
          <ul>
            {content?.highlights?.map(({ heading, content }) => (
              <li>
                {heading ? <strong>{heading}</strong> : null}{' '}
                <span
                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(content) }}
                ></span>
              </li>
            ))}
          </ul>
        </>
      )
    }
  }

  const getPrerequisites = () => {
    if (content?.prerequisites?.length === 0) {
      return null
    } else {
      return (
        <>
          <h3 className="text-color">Prerequisites</h3>
          <ul>
            {content?.prerequisites?.map(({ heading, content }) => (
              <li>
                {heading ? <strong>{heading}</strong> : null}{' '}
                <span
                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(content) }}
                ></span>
              </li>
            ))}
          </ul>
        </>
      )
    }
  }

  return (
    <>
      <div
        className="banner text-center"
        style={{ background: `url(${content?.banner}) no-repeat` }}
      ></div>

      <div className="container course-details rounded">
        <div className="row">
          <div className="col-md-8">
            {content?.about ? (
              <>
                <h2 className="text-color">About the Course</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(content?.about),
                  }}
                ></p>
              </>
            ) : null}

            {getHighlights()}

            {getPrerequisites()}

            {content?.duration ? (
              <>
                <h3 className="text-color">Course Duration</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(content?.duration),
                  }}
                ></p>
              </>
            ) : null}

            {content?.outlines?.length ? (
              <div className="curriculum">
                <h3 className="text-color">Curriculum Outline</h3>
                <ul>
                  {content?.outlines?.map((outline) => (
                    <li
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(outline),
                      }}
                    ></li>
                  ))}
                </ul>
              </div>
            ) : null}

            {content?.certification ? (
              <div className="certification">
                <h3 className="text-color">Certification</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(content?.certification),
                  }}
                ></p>
              </div>
            ) : null}
          </div>

          <div className="col-md-4">
            <img
              src={content?.banner}
              className="img-fluid rounded mb-4"
              alt="Course image"
            />

            <a
              href={`mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(content?.name || '')}`}
              className="btn btn-email d-block text-center mb-3"
            >
              Contact via Email
            </a>
            <a
              href={generateWhatsAppLink()}
              className="btn btn-whatsapp d-block text-center mb-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact via WhatsApp
            </a>
            <a
              href={content?.pdf}
              download
              className="btn btn-content d-block text-center"
            >
              Download Course Content
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails
