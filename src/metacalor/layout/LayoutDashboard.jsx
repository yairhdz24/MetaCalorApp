import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Fotter } from '../../landingPage/components/Fotter'

export const LayoutDashboard = () => {

    return (
        <>
            <div className="flex flex-col ">
                <div className="flex-grow">
                    <Navbar />
                </div>
                <div className=''>
                    <Outlet/>
                </div>
                <Fotter/>
            </div>
        </>
    )
}
