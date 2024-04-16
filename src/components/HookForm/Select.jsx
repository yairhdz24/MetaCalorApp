import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from './ErrorMessage'

export const Select = ({ name, label, options = [] }) => {
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

      <select className='shadow-md w-full h-12' {...register(name)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && <ErrorMessage error={errors[name].message} />}
    </div>
  )
}
