import AsyncSelect from 'react-select/async'
import { Controller, useFormContext } from 'react-hook-form'


export const RHFAsyncSelect = ({
  name,
  cacheOptions,
  loadOptions,
  isMulti,
  defaultOptions,
  rest
}) => {
  const { control } = useFormContext()

  return (
    <div className='w-full'>
      <Controller
      name={name}
      control={control}
      render={({
        field: { name, onBlur, onChange, value },
        fieldState: { error }
      }) => (
        <AsyncSelect
          data-cy={name}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          defaultOptions={defaultOptions}
          cacheOptions={cacheOptions}
          isMulti={isMulti}
          loadOptions={loadOptions}
          {...rest}
        />
      )}
    />
    </div>
  )
}
