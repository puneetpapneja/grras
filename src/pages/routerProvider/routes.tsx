import { IRoute } from 'interfaces/IRoute'
import React from 'react'

const HomePage = React.lazy(() => import('pages/home'))
const CourseDetailsPage = React.lazy(() => import('pages/course-details'))

const otherRoutes: Array<IRoute> = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/course/:slug',
    component: CourseDetailsPage,
  },
]

export default {
  otherRoutes,
}
