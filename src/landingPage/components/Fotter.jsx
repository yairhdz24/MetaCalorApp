import React from "react";
import { RiInstagramLine, RiFacebookCircleFill, RiWhatsappFill } from "react-icons/ri";
import logo from "../../images/metacalor.png";

export const Fotter = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 mx-auto">
        <div className="flex items-center">
          <img src={logo} loading="lazy" className="w-20 h-15 sm:w-20 sm:h-15" alt="Logo" />
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
          <div className="text-center sm:text-left">
            &copy; 2023 MetaCalor - Todos los derechos reservados.
          </div>

          <div className="flex space-x-2">
            <a href="#" className="text-gray-900 transition-colors duration-300 hover:text-green-600">
              <RiWhatsappFill className="w-7 h-7 sm:w-9 sm:h-9" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61553302805321" className="text-gray-600 transition-colors duration-300 hover:text-blue-500">
              <RiFacebookCircleFill className="w-7 h-7 sm:w-9 sm:h-9" />
            </a>

            <a href="https://www.instagram.com/meta.calor/" className="text-gray-600 transition-colors duration-300 hover:text-fuchsia-600">
              <RiInstagramLine className="w-7 h-7 sm:w-9 sm:h-9" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
