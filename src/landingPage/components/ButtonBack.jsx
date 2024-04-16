import React from 'react';
import { Link } from 'react-router-dom';

export const BackButton = () => {
  return (
    <Link to="/" className="fixed top-5 left-4 z-10">
      <button className="bg-yellow-400 w-14 h-10 sm:w-10 rounded-full flex items-center justify-center text-gray-900 hover:text-white text-base">
        ❮
      </button>
    </Link>
  );
};
