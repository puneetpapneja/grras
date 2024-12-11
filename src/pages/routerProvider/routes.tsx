import { IRoute } from 'interfaces/IRoute'
import React from 'react'

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
    path: '/bca-traning',
    component: BCATraningPage,
  },
]

export default {
  otherRoutes,
}
