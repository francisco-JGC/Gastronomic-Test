import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './configurations/router.conf'

export const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  )
}
