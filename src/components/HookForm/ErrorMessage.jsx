import { IoInformationCircleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

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

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};