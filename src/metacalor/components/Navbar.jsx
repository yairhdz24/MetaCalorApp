import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { ImgLogo } from '../../components/ImgLogo';
import { SideBar } from './SideBar';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    logout();
    navigate('/', {
      replace: true,
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white p-4 ${isOpen ? 'animate-drawer-open' : 'animate-drawer-close'}`}>
      <button
        onClick={toggleSidebar}
        className="focus:outline-none"
      >
        <svg
          className={`w-10 h-15 ${isOpen ? 'text-white' : 'text-gray-900'} hover:text-white`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="menu-content">
          <SideBar setIsOpen={setIsOpen} />
        </div>
      )}

      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-sm sm:text-4xl font-bold">Meta-Calor</h1>
        <div className=" items-center flex-col mb-2">
          {user ? (
            <div className="text-center sm:text-xl mb-4 font-bold">
              Bienvenido,  {user.name}
            </div>
          ) : null}

          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:-mr-40 sm:text-sm rounded focus:outline-none uppercase font-bold"
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </div>
  );
};