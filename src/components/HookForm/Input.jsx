import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from './ErrorMessage'

export const Input = ({ name, type = 'text', label }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className='flex-1 min-w-[200px]'>
      {label && (
        <label
          className='font-bold uppercase flex justify-center'
          style={{ color: '#0DB30D' }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        {...(type === 'number' && {
          min: 0,
          step: 0.01
        })}
        className='pl-7 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-md'
        {...register(name)}
      />

      {errors[name] && <ErrorMessage error={errors[name].message} />}
      
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string
}
