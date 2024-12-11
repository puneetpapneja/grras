import { IRoute } from 'interfaces/IRoute'
import React from 'react'
import { SLUGS } from 'utils/constants'

const HomePage = React.lazy(() => import('pages/home'))
const CourseDetailsPage = React.lazy(() => import('pages/course-details'))
const BCATraningPage = React.lazy(() => import('pages/bca-traning'))

const otherRoutes: Array<IRoute> = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/courses/:slug',
    component: CourseDetailsPage,
  },
  {
    path: '/programs/:slug',
    component: CourseDetailsPage,
  },
  {
    path: `/programs/${SLUGS.BCA_DEGREE_PROGRAM}`,
    component: BCATraningPage,
  },
]

export default {
  otherRoutes,
}
