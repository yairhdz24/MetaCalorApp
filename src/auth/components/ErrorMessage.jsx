// import React from 'react'

// export const ErrorMessage = ({error}) => {
//     return (
//         <div className='bg-red-700 p-2 mt-2 rounded-md mb-3'>
//             <h2 className='text-white font-bold text-xs'>{error}</h2>
//         </div>
//     )
// }

import React from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';

export const ErrorMessage = ({ error }) => {
  return (
    <div className='flex items-center text-red-500 px-4 py-1 rounded-md mb-3'>
      <div className='mr-2'>
        <IoInformationCircleOutline />
      </div>
      <div>
        <p className='text-sm font-semibold'>{error}</p>
      </div>
    </div>
  );
};
