import React from 'react'
import dieta from '../icons/dieta.png'
import rango from '../icons/rango.png'
import grafico from '../icons/grafico.png'
import perfil from '../icons/perfil.png'
import reminder from '../icons/recordatorio.png'
import { ItemsSidebar } from './ItemsSidebar'
import logo from '../../images/metacalor.png'

export const SideBar = ({ setIsOpen }) => {

    const closeSidebar = () => {
        setIsOpen(false)
    }

    return (
        <div className="bg-gray-800 shadow-md w-64 h-screen fixed left-0 top-0 transform translate-x-1/5 transition-transform ease-in-out duration-300 z-10">
            {/* Contenido del Sidebar */}
            <div className="p-4 text-gray-800">
                <div className='flex justify-between mb-6'>
                    <h2 className="text-2xl font-bold text-white uppercase">Menú</h2>
                    <button onClick={closeSidebar} className="focus:outline-none">
                        <svg
                            className="w-8 h-8 text-red-500 hover:text-red-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" N
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="mt-4 flex flex-col">
                    <ItemsSidebar text={'Perfil'} icon={perfil} rute={'/dashboard/profile'} />
                    <ItemsSidebar text={'Platillos'} icon={dieta} rute={'/dashboard/foods-dishes'} />
                    <ItemsSidebar text={'Reportes'} icon={grafico} rute={'/dashboard/reports'} />
                    <ItemsSidebar text={'Rango'} icon={rango} rute={'/dashboard/range'} />
                    <ItemsSidebar text={'Recordatorios'} icon={reminder} rute={'/dashboard/reminder'} />
                </ul>

            </div>
            <p className='text-center font-bold uppercase text-xl'>Meta Calor</p>
            <footer className='text-white text-center font-bold text-xl uppercase absolute bottom-0 w-64 p-4 flex justify-center'>
                <a href="/dashboard/home">
                    <img src={logo} alt="" className='h-28 ' />
                </a>
            </footer>
        </div>
    )
}
