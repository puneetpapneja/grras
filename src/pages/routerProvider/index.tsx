import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './routes'
import { IRoute } from 'interfaces/IRoute'

const NotFound: React.FC = () => {
  return <div>Not found</div>
}

const RouterProvider = () => {
  const renderRoutes = () => {
    const { otherRoutes } = routes
    return (
      <Routes>
        {otherRoutes?.map((route: IRoute) => (
          <Route path={route.path} Component={route.component} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>{renderRoutes()}</Suspense>
    </Router>
  )
}

export default RouterProvider
