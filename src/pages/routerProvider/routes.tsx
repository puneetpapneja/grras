import { IRoute } from 'interfaces/IRoute'
import React from 'react'

const HomePage = React.lazy(() => import('pages/home'))

const otherRoutes: Array<IRoute> = [
  {
    path: '/',
    component: HomePage,
  },
]

export default {
  otherRoutes,
}
