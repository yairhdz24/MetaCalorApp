import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/metacalor.png';
import { FiInfo, FiMail, FiUser, FiLogIn } from 'react-icons/fi';

export const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    const MenuLink = ({ to, icon, text }) => (
        <NavLink to={to} onClick={closeMenu} className="flex items-center text-green-600 hover:text-yellow-500 text-lg font-semibold py-2">
            {icon}
            <span className="ml-2">{text}</span>
        </NavLink>
    );

    return (
        <header className="relative bg-white text-white w-full py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} style={{ height: '100px', width: '150px' }} alt="Logo" />
                </div>

                <div className="hidden sm:flex items-center space-x-8">
                    {/* <MenuLink to="/acerca-de" icon={<FiInfo />} text="Acerca de" /> */}
                    <MenuLink to="/contact" icon={<FiMail />} text="Contáctanos" />
                    <MenuLink to="/auth/register" icon={<FiUser />} text="Regístrate" />
                    <MenuLink to="/auth/login" icon={<FiLogIn />} text="Login" />
                </div>

                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-900 hover:text-white px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                    >
                        <svg
                            className={`w-10 h-15 ${menuVisible ? 'text-white' : 'text-gray-900'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {menuVisible && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 transition-opacity">
                        <div className="flex items-center justify-end h-full">
                            <div className="bg-white w-64 h-full shadow-lg p-4 transition-transform">
                                <button
                                    onClick={toggleMenu}
                                    className="text-gray-900 hover:text-white px-2 py-2 rounded-md absolute top-2 right-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-900"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                                <div className="container mx-auto flex flex-col items-center space-y-2 mt-16">
                                        {/* <MenuLink to="/acerca-de" icon={<FiInfo />} text="Acerca de" /> */}
                                    <MenuLink to="/contact" icon={<FiMail />} text="Contáctanos" />
                                    <MenuLink to="/auth/register" icon={<FiUser />} text="Regístrate" />
                                    <MenuLink to="/auth/login" icon={<FiLogIn />} text="Login" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
