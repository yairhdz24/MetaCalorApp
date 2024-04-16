import { Link, Link as RouterLink, useNavigate } from 'react-router-dom'
import { ButtonInput } from './ButtonInput'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { authApi } from '../../store/api/authApi'

import { InputField } from './InputField'
import { ErrorMessage } from './ErrorMessage'
import { Spinner } from '../../components/Spinner'

const { useRegisterMutation } = authApi

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    getValues,
    setError
  } = useForm()
  const [result, setResult] = useState(null)

  const [registerApi, { isLoading }] = useRegisterMutation()

  const height = watch('height')
  const weight = watch('weight')
  const gender = watch('gender')
  const birthday = watch('birthday')

  useEffect(() => {
    const calculateImc = () => {
      if (weight && height) {
        const weightInKg = parseFloat(weight)
        const heightInMt = parseFloat(height)

        if (!isNaN(weightInKg) && !isNaN(heightInMt) && heightInMt > 0) {
          const imcCalculated = weightInKg / (heightInMt * heightInMt)
          setResult(imcCalculated.toFixed(2))
          setValue('imc', imcCalculated.toFixed(2))
        } else {
          setResult(null)
          setValue('imc', '')
        }
      }
    }

    calculateImc()
  }, [setValue, weight, height])


  const navigate = useNavigate()

  const onSubmit = async data => {
    const { password, passwordConfirm } = getValues()
    if (password !== passwordConfirm) {
      setError('passwordConfirm', {
        type: 'manual',
        message: 'Las contraseñas no coinciden'
      })
    }
    try {
      const res = await registerApi(data).unwrap()
      console.log(res)
      if (res?.id) {
        navigate('/auth/login')
        console.log(res.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full max-w-md mx-auto z-10'>
      <div className='text-center shadow-xl rounded-lg py-7 px-5 mb-10 bg-white'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className='text-xl font-bold uppercase text-green-600 mb-5'>
            Registrarte Es rápido y fácil.
          </h3>

          <div className='flex flex-wrap -mx-2'>
            <div className='w-1/2 px-2'>
              <InputField
                label='Nombre'
                placeholder='Nombre'
                name='name'
                register={register}
                errors={errors}
                validationRules={{ required: true }}
              />
            </div>

            <div className='w-1/2 px-2'>
              <InputField
                label='Apellido'
                placeholder='Apellido'
                name='lastName'
                register={register}
                errors={errors}
                validationRules={{ required: true }}
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-2 mt-2'>
            <div className='w-1/2 px-2'>
              <InputField
                label='Fecha de Nacimiento'
                placeholder='Fecha de nacimiento'
                name='birthday'
                type='date'
                register={register}
                errors={errors}
                validationRules={{
                  required: true,
                  validate: (value) => validateDate(value, register),
                }}
              />
            </div>
            <div className='w-1/2 px-2'>
              <InputField
                label='Sexo'
                name='gender'
                type='select'
                register={register}
                errors={errors}
                validationRules={{ required: true }}
              >
                <option value='male'>Hombre</option>
                <option value='female'>Mujer</option>
              </InputField>
            </div>
          </div>

          <div className='flex flex-wrap -mx-2 mt-2'>
            <div className='w-1/2 px-2'>
              <InputField
                label='Altura (m)'
                placeholder='Altura'
                name='height'
                type='text'
                step='0.1'
                register={register}
                errors={errors}
                validationRules={{ required: true, min: 0 }}
              />
            </div>

            <div className='w-1/2 px-2'>
              <InputField
                label='Peso (kg)'
                placeholder='Peso'
                name='weight'
                type='text'
                step='0.1'
                register={register}
                errors={errors}
                validationRules={{ required: true, min: 0, max: 200 }}
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-2 mt-2'>
            <div className='w-1/2 px-2'>
              <InputField
                label='IMC'
                placeholder='IMC'
                name='imc'
                type='text'
                step='0.1'
                register={register}
                errors={errors}
                value={result !== null ? result : ''}
                readOnly
              />
            </div>

            <div className='w-1/2 px-2'>
              <InputField
                label='Consumo deseado'
                placeholder='Consumo deseado'
                name='desiredCalorieConsumption'
                type='number'
                register={register}
                errors={errors}
                validationRules={{ required: true, min: 0, max: 10000 }}
              />
            </div>
          </div>

          <div className='mb-3 mt-2'>
            <InputField
              label='Email'
              placeholder='Usuario123@gmail.com'
              name='email'
              type='email'
              register={register}
              errors={errors}
              validationRules={{
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              }}
            />
          </div>

          <div className='mb-3 mt-2'>
            <InputField
              label='Contraseña'
              placeholder='***********'
              name='password'
              type='password'
              register={register}
              errors={errors}
              validationRules={{ required: true, minLength: 8 }}
            />
          </div>

          <div className='mb-3 mt-2'>
            <InputField
              label='Confirmar Contraseña'
              placeholder='***********'
              name='passwordConfirm'
              type='password'
              register={register}
              errors={errors}
              validationRules={{ required: true, minLength: 8 }}
            />
            {errors.passwordConfirm &&
              errors.passwordConfirm.type === 'manual' && (
                <ErrorMessage error={'Las contraseñas no coinciden'} />
              )}
          </div>

          <div className='flex justify-center'>
            <ButtonInput isLoading={isLoading} text={'Registrar'}/>
          </div>

          <div className='mt-4'>
            ¿Ya tienes cuenta?
            <Link
              component={RouterLink}
              to='/auth/login'
              className='text-blue-500 hover:underline'
            >
              ¡Inicia Sesion!
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
