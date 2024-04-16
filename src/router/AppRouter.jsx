import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { MetaCalorRoutes } from '../metacalor/routes/MetaCalorRoutes'
import { LandingRoutes } from '../landingPage/routes/LandingRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { NotFound } from '../components/NotFound'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<PublicRoute><AuthRoutes /></PublicRoute>} />
      <Route path="/*" element={<PublicRoute><LandingRoutes /></PublicRoute>} />
      <Route path="/dashboard/*" element={<PrivateRoute><MetaCalorRoutes /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} /> {/* Ruta comodín para páginas no encontradas */}
    </Routes>
  )
}
