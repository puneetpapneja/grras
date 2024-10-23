import CourseDetails from 'components/course-details'
import importScript from 'hooks'
import React from 'react'

const CourseDetailsPage: React.FC = () => {
  importScript()
  return <CourseDetails />
}

export default CourseDetailsPage
