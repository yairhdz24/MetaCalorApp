import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutDashboard } from '../layout/LayoutDashboard'
import { MetaCalorPage } from '../pages/MetaCalorPage'
import { Profile } from '../pages/Profile'
import { FoodsDishes } from '../pages/FoodsDishes'
import { Reports } from '../pages/Reports'
import { Range } from '../pages/Range'
import { Reminder } from '../pages/Reminder'

export const MetaCalorRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutDashboard />}>
        <Route index path='/home' element={<MetaCalorPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/foods-dishes' element={<FoodsDishes />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/range' element={<Range />} />
        <Route path='/reminder' element={<Reminder />} />
      </Route>
    </Routes>
  )
}
